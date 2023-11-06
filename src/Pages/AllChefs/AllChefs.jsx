import { Helmet } from "react-helmet-async";

const AllChefs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* first card */}
      <Helmet>
        <title>Cheesy | Chefs</title>
      </Helmet>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/TrMG7K7/maks-styazhkin-ZDJ8kkkd7-RY-unsplash.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Tom Henry
            </p>
          </div>
        </div>
      </div>
      {/* second card */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/2P4kwYR/jack-finnigan-rri-AI0nhcbc-unsplash-1.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Michel
            </p>
          </div>
        </div>
      </div>
      {/* third card */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/1L0s95t/vince-fleming-7qile-Fw-JEWo-unsplash.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Albert
            </p>
          </div>
        </div>
      </div>
      {/* fourth card */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/BtH5szD/petr-sevcovic-e12w-QLAj-Qi0-unsplash.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Henry
            </p>
          </div>
        </div>
      </div>
      {/* fifth card */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/KhFsVTf/redcharlie-t-7-KEq9-M0b0-unsplash.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Jeorge
            </p>
          </div>
        </div>
      </div>
      {/* sixth card */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/g68DZ1N/louis-hansel-v3-Ol-BE6-fh-U-unsplash.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Cruise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChefs;
