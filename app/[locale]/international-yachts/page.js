// app/[locale]/international-yachts/page.js
import MultiDatePicker from "@/app/components/MultiDatePicker";
import ClientSearchResults from "@/app/components/ClientSearchResults"; // New client component

export default function VesselsPage({ searchParams }) {
  // Additional diagnostic information
  // const renderInfo = {
  //   timestamp: new Date().toISOString(),
  //   vercel: process.env.VERCEL ? 'Yes' : 'No',
  //   searchParamsReceived: Object.keys(searchParams).length > 0 ? 'Yes' : 'No',
  //   searchParamsKeys: Object.keys(searchParams),
  //   nodeVersion: process.version,
  //   privateKeyAvailable: process.env.ANKOR_PRIVATE_KEY ? 'Yes' : 'No',
  //   keyIdAvailable: process.env.ANKOR_KEY_ID ? 'Yes' : 'No'
  // };
  
  // Determine if we have search parameters
  const hasParams = Object.keys(searchParams).length > 0;
  // renderInfo.hasParamsValue = hasParams;

  return (
    <div className="bg-white w-full h-full mt-14 md:mt-0 mb-36 nav-space">
      {/* Always show basic diagnostic info at the top */}
      {/* <div className="bg-blue-50 border border-blue-200 rounded-md p-4 m-4">
        <h2 className="text-lg font-bold mb-2">Page Render Diagnostics</h2>
        <pre className="bg-white p-2 rounded text-xs overflow-auto max-h-40">
          {JSON.stringify(renderInfo, null, 2)}
        </pre>
      </div> */}

      {/* Hero */}
      <div className="relative w-full h-[500px]">
        <img
          src="/international-yacht.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center my-8">
        <h1 className="font-extrabold mb-2 tracking-tight">HEADER</h1>
        <h3 className="font-light">SUB HEADER</h3>
      </div>

      {/* Search Form */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <form
          id="searchForm"
          className="text-sm grid grid-cols-2 md:grid-cols-5 gap-4 items-end p-5 rounded-md bg-primary-blue-light"
        >
          {/* Always include these hidden fields for the required parameters */}
          <input type="hidden" name="currency" value="USD" />
          
          <input
            name="name"
            placeholder="Vessel Name"
            defaultValue={searchParams.name || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <select
            name="region"
            defaultValue={searchParams.region || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          >
            <option value="">Choose Destination</option>
            <option value="Africa">Africa</option>
            {/* … */}
          </select>

          <select
            name="yachtType"
            defaultValue={searchParams.yachtType || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          >
            <option value="">Choose Type of Boat</option>
            <option value="Sailboat">Gulet</option>
            {/* … */}
          </select>

          <select
            name="charterType"
            defaultValue={searchParams.charterType || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          >
            <option value="">Choose Type of Charter</option>
            <option value="Crewed">Crewed</option>
            <option value="Bareboat">Bareboat</option>
          </select>

          <div className="w-full mb-2 md:mb-0">
            <MultiDatePicker
              name="rentalPeriod"
              defaultDates={searchParams.rentalPeriod || []}
            />
          </div>

          <input
            name="minLength"
            placeholder="Min Length"
            defaultValue={searchParams.minLength || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <input
            name="maxLength"
            placeholder="Max Length"
            defaultValue={searchParams.maxLength || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <input
            name="sleeps"
            placeholder="Sleeps"
            defaultValue={searchParams.sleeps || ""}
            className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
          />

          <button
            type="submit"
            className="col-span-2 bg-primary-blue text-white font-semibold py-2 px-6 rounded-md uppercase"
          >
            SEARCH
          </button>
        </form>
      </section>

      {/* Add script to handle lengthRange mapping on submit */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            var form = document.getElementById('searchForm');
            // Price dropdown logic
            var priceToggle = document.getElementById('priceDropdownToggle');
            var priceMenu = document.getElementById('priceDropdownMenu');
            var priceSlider = document.getElementById('priceRangeSlider');
            var minPriceLabel = document.getElementById('minPriceLabel');
            var maxPriceLabel = document.getElementById('maxPriceLabel');
            var priceApply = document.getElementById('priceDropdownApply');
            var priceDropdownLabel = document.getElementById('priceDropdownLabel');
            var selectedPrice = 0;
            if (priceToggle && priceMenu) {
              priceToggle.addEventListener('click', function(e) {
                priceMenu.style.display = priceMenu.style.display === 'block' ? 'none' : 'block';
              });
              document.addEventListener('click', function(e) {
                if (!priceToggle.contains(e.target) && !priceMenu.contains(e.target)) {
                  priceMenu.style.display = 'none';
                }
              });
            }
            if (priceSlider && minPriceLabel && maxPriceLabel) {
              priceSlider.addEventListener('input', function(e) {
                selectedPrice = priceSlider.value;
                minPriceLabel.textContent = '0';
                maxPriceLabel.textContent = Number(selectedPrice).toLocaleString();
              });
            }
            if (priceApply && priceMenu && priceDropdownLabel) {
              priceApply.addEventListener('click', function() {
                priceDropdownLabel.textContent = '0 - ' + Number(selectedPrice).toLocaleString();
                priceMenu.style.display = 'none';
              });
            }
            if (form) {
              form.addEventListener('submit', function(e) {
                // Remove any previous hidden min/max price
                var oldMinP = form.querySelector('input[name=priceMin]');
                var oldMaxP = form.querySelector('input[name=priceMax]');
                if (oldMinP) oldMinP.remove();
                if (oldMaxP) oldMaxP.remove();
                // Add priceMin and priceMax if price selected
                if (selectedPrice > 0) {
                  var minInput = document.createElement('input');
                  minInput.type = 'hidden';
                  minInput.name = 'priceMin';
                  minInput.value = '0';
                  form.appendChild(minInput);
                  var maxInput = document.createElement('input');
                  maxInput.type = 'hidden';
                  maxInput.name = 'priceMax';
                  maxInput.value = selectedPrice;
                  form.appendChild(maxInput);
                }
                // Length logic (existing)
                var dropdown = document.getElementById('lengthRangeDropdown');
                var selected = dropdown ? dropdown.value : '';
                var oldMin = form.querySelector('input[name=minLength]');
                var oldMax = form.querySelector('input[name=maxLength]');
                if (oldMin) oldMin.remove();
                if (oldMax) oldMax.remove();
                if (selected) {
                  var min = '';
                  var max = '';
                  if (selected === '<16') {
                    min = '';
                    max = '54';
                  } else if (selected === '16-18') {
                    min = '55';
                    max = '62';
                  } else if (selected === '18-25') {
                    min = '62';
                    max = '82';
                  } else if (selected === '>25') {
                    min = '82';
                    max = '';
                  }
                  if (min) {
                    var minInputL = document.createElement('input');
                    minInputL.type = 'hidden';
                    minInputL.name = 'minLength';
                    minInputL.value = min;
                    form.appendChild(minInputL);
                  }
                  if (max) {
                    var maxInputL = document.createElement('input');
                    maxInputL.type = 'hidden';
                    maxInputL.name = 'maxLength';
                    maxInputL.value = max;
                    form.appendChild(maxInputL);
                  }
                }
              });
            }
          });
        `
      }} />

      {/* Client-side component to handle API calls */}
      <ClientSearchResults searchParams={searchParams} hasParams={hasParams} />
    </div>
  );
}