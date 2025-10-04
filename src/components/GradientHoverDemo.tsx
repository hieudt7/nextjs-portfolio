import * as React from 'react';

/**
 * Component demo để minh họa hiệu ứng gradient hover mới
 * @returns JSX Element
 */
const GradientHoverDemo: React.FC = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Gradient Hover Effect Demo
      </h2>
      
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Hiệu ứng mới đã implement:
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-700">
              <strong>Always Active:</strong> Overlay luôn luôn hiển thị, luôn có 1 item active
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-700">
              <strong>Active Class Management:</strong> JavaScript thêm/xóa class "active" cho items
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-700">
              <strong>Default Active:</strong> Item đầu tiên có class "active" ngay từ đầu
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-700">
              <strong>Accurate Height:</strong> Gradient height = chính xác height của item được hover
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-700">
              <strong>New Gradient Colors:</strong> 
              <code className="ml-2 rounded bg-gray-200 px-2 py-1 text-sm">
                linear-gradient(260deg, var(--tj-theme-secondary) 0%, var(--tj-theme-primary) 100%)
              </code>
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-700">
              <strong>Correct Z-Index:</strong> Gradient overlay (z-index: 1), Items (z-index: 2)
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-gray-700">
              <strong>Smooth Transitions:</strong> 0.5s transition duration như website gốc
            </span>
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-blue-50 p-4">
          <h4 className="mb-3 font-semibold text-blue-800">
            CSS Variables đã thêm:
          </h4>
          <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-green-400">
            {`:root {
  --tj-theme-primary: #8750f7;
  --tj-theme-secondary: #2a1454;
}`}
          </pre>
        </div>
        
        <div className="mt-6 rounded-lg bg-yellow-50 p-4">
          <h4 className="mb-3 font-semibold text-yellow-800">
            Cách hoạt động:
          </h4>
          <ul className="space-y-2 text-sm text-yellow-700">
            <li>• <strong>Khởi tạo:</strong> Item đầu tiên có class "active", overlay hiển thị</li>
            <li>• <strong>Hover:</strong> Khi hover vào item khác, xóa class "active" khỏi item cũ, thêm vào item mới</li>
            <li>• <strong>Active State:</strong> Chỉ 1 item có class "active" tại một thời điểm</li>
            <li>• <strong>Slide Effect:</strong> Gradient overlay di chuyển mượt mà đến vị trí item active</li>
            <li>• <strong>Always Active:</strong> Overlay không bao giờ mất đi, luôn có 1 item có class "active"</li>
            <li>• <strong>Text Effects:</strong> Text và icons chuyển sang màu trắng với animation effects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GradientHoverDemo;
