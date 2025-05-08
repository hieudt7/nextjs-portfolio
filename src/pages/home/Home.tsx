/* eslint-disable style/no-mixed-spaces-and-tabs */
/* eslint-disable style/no-tabs */
'use client';
import { SelectScrollable } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCountStore } from '@/stores/home';
import usePersistStore from '@/utils/usePersistStore';
import { useCallback, useEffect, useState } from 'react';

const sampleData = [
  {
    id: '0001',
    type: 'donut',
    name: 'Cake',
    ppu: 0.55,
    batters:
			{
			  batter:
					[
					  { id: '1001', type: 'Regular' },
					  { id: '1002', type: 'Chocolate' },
					  { id: '1003', type: 'Blueberry' },
					  { id: '1004', type: 'Devil\'s Food' },
					],
			},
    topping:
			[
			  { id: '5001', type: 'None' },
			  { id: '5002', type: 'Glazed' },
			  { id: '5005', type: 'Sugar' },
			  { id: '5007', type: 'Powdered Sugar' },
			  { id: '5006', type: 'Chocolate with Sprinkles' },
			  { id: '5003', type: 'Chocolate' },
			  { id: '5004', type: 'Maple' },
			],
  },
  {
    id: '0002',
    type: 'donut',
    name: 'Raised',
    ppu: 0.55,
    batters:
			{
			  batter:
					[
					  { id: '1001', type: 'Regular' },
					],
			},
    topping:
			[
			  { id: '5001', type: 'None' },
			  { id: '5002', type: 'Glazed' },
			  { id: '5005', type: 'Sugar' },
			  { id: '5003', type: 'Chocolate' },
			  { id: '5004', type: 'Maple' },
			],
  },
  {
    id: '0003',
    type: 'donut',
    name: 'Old Fashioned',
    ppu: 0.55,
    batters:
			{
			  batter:
					[
					  { id: '1001', type: 'Regular' },
					  { id: '1002', type: 'Chocolate' },
					],
			},
    topping:
			[
			  { id: '5001', type: 'None' },
			  { id: '5002', type: 'Glazed' },
			  { id: '5003', type: 'Chocolate' },
			  { id: '5004', type: 'Maple' },
			],
  },
];

type ICake = {
  id: string;
  type: string;
  name: string;
  ppu: number;
  batters: {
    batter: { id: string; type: string }[];
  };
  topping: { id: string; type: string }[];
};

const HomePage = () => {
  const THROTTLED_TIME = 1000;
  const store = usePersistStore(useCountStore, state => state);
  const [query, setQuery] = useState<string>('');
  const [filterKey, setFilterKey] = useState<string>('');
  const [searchData, setSearchData] = useState<string>('');
  const [cakes, setCakes] = useState<ICake[]>([]);

  // Throttle each n time will trigger the function
  function throttle<T extends (...args: any[]) => void>(
    fn: T,
    wait: number,
  ): (...args: Parameters<T>) => void {
    let lastTime = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function (...args: Parameters<T>) {
      const now = Date.now();

      if (now - lastTime >= wait) {
        lastTime = now;
        fn(...args);
      } else if (!timeoutId) {
        timeoutId = setTimeout(() => {
          lastTime = Date.now();
          timeoutId = null;
          fn(...args);
        }, wait - (now - lastTime));
      }
    };
  }

  // Debounce after done n time will trigger the function
  function debounce<T extends (...args: any[]) => void>(
    fn: T,
    wait: number,
  ): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function (...args: Parameters<T>) {
      // Xóa timeout cũ nếu có
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Tạo một timeout mới
      timeoutId = setTimeout(() => {
        fn(...args);
      }, wait);
    };
  }

  const fetchApi = (value: string) => {
    return `${Math.random()} ${value}`;
  };

  const handleSearch = useCallback(async (searchTerm: string) => {
    const response = await fetchApi(searchTerm);
    setSearchData(response);
  }, []);

  const handleFilter = useCallback((value: string) => {
    // do filter and pagging on sever
    if (value === '') {
      setCakes(sampleData);
    } else {
      const result = cakes.filter(item => item.name.trim().toLowerCase().includes(value.trim().toLowerCase()));
      setCakes(result);
    }
  }, [cakes]);

  // Throttle the search function
  const throttledSearch = useCallback(throttle(handleSearch, THROTTLED_TIME), [query]);
  const throttledfilter = useCallback(debounce(handleFilter, THROTTLED_TIME), [filterKey]);

  const handleChange = async (value: string) => {
    // validate nếu cần
    setQuery(value);
    throttledSearch(value);
  };
  const onChangeFilter = async (value: string) => {
    // validate nếu cần
    setFilterKey(value);
    throttledfilter(value);
  };

  useEffect(() => {
    setCakes(sampleData);
  }, []);

  return (
    <>
      <h2 className="mt-5 text-2xl font-bold">
        Home Page
      </h2>
      <h1>
        State management Counter
      </h1>
      <span>{store?.count}</span>

      <div className="mb-4 flex gap-2">
        <Button onClick={store?.increase} type="button">
          Increase
        </Button>
        <Button onClick={store?.decrease} type="button">
          Decrease
        </Button>
        <SelectScrollable />
      </div>
      <div className="mb-4">
        <h4>Search Form</h4>
        <Input value={query} placeholder="Search Api" onChange={e => handleChange(e.target.value)} />
        {searchData && <span>{searchData}</span>}
      </div>
      <div className="mb-4">
        <h4>Table demo</h4>
        <Input value={filterKey} placeholder="Filter" onChange={e => onChangeFilter(e.target.value)} />
        <table className="table-auto">
          <thead>
            <tr>
              <th><b>ID</b></th>
              <th><b>Type</b></th>
              <th><b>Name</b></th>
              <th><b>Ppu</b></th>
              <th><b>Batters</b></th>
              <th><b>Topping</b></th>
            </tr>
          </thead>
          <tbody>
            {
              cakes && cakes.length > 0
                ? (
                    <>
                      {
                        cakes.map((cake, idx) => (
                          <tr key={`${idx} ${cake.id}`}>
                            <td>{cake.id}</td>
                            <td>{cake.type}</td>
                            <td>{cake.name}</td>
                            <td>{cake.ppu}</td>
                            <td>{cake.id}</td>
                            <td>{cake.id}</td>
                          </tr>
                        ),
                        )
                      }
                    </>
                  )
                : (
                    <>
                      <tr>
                        <td>
                          loading...
                        </td>
                      </tr>
                    </>
                  )
            }

          </tbody>
        </table>
      </div>

    </>
  );
};

export default HomePage;
