'use client';
import type { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { events } from '@/utils/mock';
import Link from 'next/link';

type DataTableProps = {
  children?: ReactNode;
};

export default function DataTable({
  children,
}: DataTableProps) {
  const checkEventStatus = (event: any) => {
    if (event.data.length === 0) {
      return 'No data';
    }
    const status = event.data[event.data.length - 1].uqudoEventName.includes('SUBMITED_SUCCESS') ? 'SUCCESS' : 'FAIL';
    if (status === 'SUCCESS') {
      return <span className="text-green-500">SUCCESS</span>;
    }
    return <span className="text-red-500">FAIL</span>;
  };
  const excuteTime = (event: any) => {
    return ((new Date(event.data[event.data.length - 1].timestamp || 0).getTime() - new Date(event.data[0].timestamp).getTime()) / 1000).toFixed(2);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Event name</TableHead>
          <TableHead>SessionID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Document type</TableHead>
          <TableHead>Excute time (s)</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Detail</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {children}
        {events.map((event, index) => (
          event.data.length > 0
          && (
            <TableRow key={`${index}_record_${event.data[0]?.uqudo_session_id}`}>
              <TableCell className="font-medium">{event.data[event.data.length - 1]?.timestamp}</TableCell>
              <TableCell className="max-w-[400px] break-all font-medium">{event.data[event.data.length - 1]?.uqudoEventName}</TableCell>
              <TableCell className="font-medium">{event.data[0]?.uqudo_session_id}</TableCell>
              <TableCell className="font-medium">{event.data[0]?.uqudo_session_id}</TableCell>
              <TableCell className="font-medium">{event.data[0]?.documentType}</TableCell>
              <TableCell className="font-medium">
                <span>
                  {excuteTime(event)}
                </span>
              </TableCell>
              <TableCell className="font-medium">{checkEventStatus(event)}</TableCell>
              <TableCell className="font-medium">
                <Link
                  className="hover:text-blue-700"
                  key={`${index}_record_${event.data[0]?.uqudo_session_id}`}
                  href={`/dashboard/${event.data[0]?.uqudo_session_id}`}
                >
                  Detail
                </Link>
              </TableCell>
            </TableRow>
          )
        ))}
      </TableBody>
    </Table>
  );
}
