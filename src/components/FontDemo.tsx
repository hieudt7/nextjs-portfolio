import React from 'react';

/**
 * Component demo để minh họa cách sử dụng HelveticaNeue font
 * @returns JSX Element
 */
const FontDemo: React.FC = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        HelveticaNeue Font Demo
      </h2>
      
      <div className="space-y-6">
        {/* Default Font (Regular) */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Regular (400) - Default
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Medium Font */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Medium (500)
          </h3>
          <p className="font-helvetica-medium text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Bold Font */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Bold (700)
          </h3>
          <p className="font-helvetica-bold text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Different Sizes */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Different Sizes
          </h3>
          <div className="space-y-3">
            <p className="text-xs text-gray-600">Extra Small (12px) - Lorem ipsum dolor sit amet</p>
            <p className="text-sm text-gray-600">Small (14px) - Lorem ipsum dolor sit amet</p>
            <p className="text-base text-gray-600">Base (16px) - Lorem ipsum dolor sit amet</p>
            <p className="text-lg text-gray-600">Large (18px) - Lorem ipsum dolor sit amet</p>
            <p className="text-xl text-gray-600">Extra Large (20px) - Lorem ipsum dolor sit amet</p>
            <p className="text-2xl text-gray-600">2X Large (24px) - Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        {/* Headings */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Headings
          </h3>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-800">Heading 1 (36px)</h1>
            <h2 className="text-3xl font-bold text-gray-800">Heading 2 (30px)</h2>
            <h3 className="text-2xl font-semibold text-gray-800">Heading 3 (24px)</h3>
            <h4 className="text-xl font-semibold text-gray-800">Heading 4 (20px)</h4>
            <h5 className="text-lg font-medium text-gray-800">Heading 5 (18px)</h5>
            <h6 className="text-base font-medium text-gray-800">Heading 6 (16px)</h6>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="rounded-lg bg-blue-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-blue-800">
            Cách sử dụng trong code:
          </h3>
          <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-green-400">
            {`// Sử dụng utility classes
<h1 className="font-helvetica-bold text-4xl">Bold Heading</h1>
<p className="font-helvetica-medium">Medium text</p>
<span className="font-helvetica">Regular text</span>

// Hoặc sử dụng font-weight với Tailwind
<h1 className="font-bold text-4xl">Bold with Tailwind</h1>
<p className="font-medium">Medium with Tailwind</p>
<p className="font-normal">Regular with Tailwind</p>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FontDemo;
