/* eslint-disable react/prop-types */

const BlogBanner = ({ imageUrl, title, subtitle, overlayColor, textColor }) => {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt="Banner"
        className="h-[calc(100vh-50vh)] w-full object-cover"
      />
      <div
        className={`absolute inset-0 ${overlayColor} flex items-center justify-center`}
      >
        <div className="text-center px-4">
          <h1 className={`text-4xl font-bold ${textColor}`}>{title}</h1>
          <p className={`text-xl mt-4 ${textColor}`}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
