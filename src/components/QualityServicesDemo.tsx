import { qualityServicesData, type QualityService } from '@/types/qualityServices';
import * as React from 'react';

/**
 * Component demo để minh họa cách sử dụng qualityServicesData
 * @returns JSX Element
 */
const QualityServicesDemo: React.FC = () => {
  // Ví dụ về cách filter data
  const frontendServices = qualityServicesData.filter(
    (service) => service.title.toLowerCase().includes('frontend')
  );

  // Ví dụ về cách map data thành format khác
  const serviceTitles = qualityServicesData.map((service) => service.title);

  // Ví dụ về cách tìm service theo id
  const findServiceById = (id: number): QualityService | undefined => {
    return qualityServicesData.find((service) => service.id === id);
  };

  return (
    <div className="rounded-lg bg-gray-50 p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Quality Services Data Demo
      </h2>

      {/* Hiển thị tất cả services */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Tất cả Services ({qualityServicesData.length})
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {qualityServicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-lg border border-gray-200 p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                  {service.number}
                </span>
                <h4 className="font-medium text-gray-800">{service.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hiển thị filtered data */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Frontend Services ({frontendServices.length})
        </h3>
        {frontendServices.map((service) => (
          <div key={service.id} className="mb-3 rounded-lg border border-gray-200 p-3">
            <h4 className="font-medium text-gray-800">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Hiển thị service titles */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Service Titles
        </h3>
        <ul className="space-y-2">
          {serviceTitles.map((title, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-blue-600">•</span>
              <span className="text-gray-700">{title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hiển thị service theo ID */}
      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Service theo ID (ID: 3)
        </h3>
        {(() => {
          const service = findServiceById(3);
          return service ? (
            <div className="rounded-lg border border-gray-200 p-4">
              <h4 className="font-medium text-gray-800">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ) : (
            <p className="text-gray-500">Không tìm thấy service với ID này</p>
          );
        })()}
      </div>

      {/* Code examples */}
      <div className="rounded-lg bg-blue-50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-blue-800">
          Cách sử dụng trong code:
        </h3>
        <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-green-400">
          {`import { qualityServicesData, type QualityService } from '@/types/qualityServices';

// Sử dụng data trực tiếp
{qualityServicesData.map((service) => (
  <div key={service.id}>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
))}

// Filter data
const frontendServices = qualityServicesData.filter(
  service => service.title.toLowerCase().includes('frontend')
);

// Find service by ID
const service = qualityServicesData.find(service => service.id === 1);

// Map to different format
const titles = qualityServicesData.map(service => service.title);`}
        </pre>
      </div>
    </div>
  );
};

export default QualityServicesDemo;
