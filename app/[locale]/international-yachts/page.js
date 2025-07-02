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
          className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
        >
          {/* Always include these hidden fields for the required parameters */}
          <input type="hidden" name="currency" value="USD" />
          
          <div className="w-full mb-2 md:mb-0">
            <input
              name="name"
              placeholder="VESSEL NAME"
              defaultValue={searchParams.name || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="region"
              defaultValue={searchParams.region || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">CHOOSE DESTINATION</option>
              <option value="Africa">Africa</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Arabian Gulf">Arabian Gulf</option>
              <option value="Australasia & South Pacific">Australasia & South Pacific</option>
              <option value="Caribbean">Caribbean</option>
              <option value="East Mediterranean">East Mediterranean</option>
              <option value="Indian Ocean & South East Asia">Indian Ocean & South East Asia</option>
              <option value="North America">North America</option>
              <option value="Northern Europe">Northern Europe</option>
              <option value="South & Central America">South & Central America</option>
              <option value="West Mediterranean">West Mediterranean</option>
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="yachtType"
              defaultValue={searchParams.yachtType || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">CHOOSE TYPE OF BOAT</option>
              <option value="Gulet">Gulet</option>
              <option value="Sailing">Sailing</option>
              <option value="Catamaran">Catamaran</option>
              <option value="Motor">Motor</option>
              <option value="Power Catamaran">Power Catamaran</option>
              <option value="Classic">Classic</option>
              <option value="Expedition">Expedition</option>
              <option value="Sport fishing">Sport fishing</option>
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="charterType"
              defaultValue={searchParams.charterType || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">CHOOSE TYPE OF CHARTER</option>
              <option value="Crewed">Crewed</option>
              <option value="Bareboat">Bareboat</option>
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="w-full mb-2 md:mb-0">
            <MultiDatePicker
              name="rentalPeriod"
              defaultDates={searchParams.rentalPeriod || []}
            />
          </div>

          {/* Length Dropdown */}
          <div className="w-full mb-2 md:mb-0 relative">
            <select
              defaultValue={searchParams.lengthRange || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
              id="lengthRangeDropdown"
            >
              <option value="">CHOOSE LENGTH</option>
              <option value="<16">less than 16M (&lt;54ft)</option>
              <option value="16-18">16M-18M (55-62ft)</option>
              <option value="18-25">18M-25M (62-82ft)</option>
              <option value=">25">Over 25M (&gt;82ft)</option>
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="w-full mb-2 md:mb-0 relative">
            <select
              name="sleeps"
              defaultValue={searchParams.sleeps || ""}
              className="block w-full border border-gray-300 py-2 px-3 pr-10 focus:outline-none appearance-none"
            >
              <option value="">GUEST</option>
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <svg className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>

          {/* Price Range Dropdown with Slider */}
          <div className="w-full mb-2 md:mb-0 relative" style={{ zIndex: 10 }}>
            <div id="priceDropdownToggle" className="block w-full border border-gray-300 py-2 px-3 bg-white cursor-pointer focus:outline-none flex items-center justify-between" tabIndex={0}>
              <span id="priceDropdownLabel" className="text-md">CHOOSE PRICE</span>
              {/* Dropdown icon */}
              <svg id="priceDropdownIcon" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div id="priceDropdownMenu" style={{ display: 'none', position: 'absolute', left: 0, right: 0, background: 'white', border: '1px solid #ccc', padding: '16px', zIndex: 20 }}>
              <label htmlFor="priceRangeSlider" className="block mb-2">Select Price Range</label>
              <input type="range" id="priceRangeSlider" min="0" max="250000" step="1000" defaultValue="0" style={{ width: '100%' }} />
              <div className="flex justify-between mt-2">
                <span id="minPriceLabel">0</span>
                <span id="maxPriceLabel">250,000</span>
              </div>
              <button type="button" id="priceDropdownApply" className="mt-4 w-full bg-primary-blue text-white font-semibold py-1 px-4">Apply</button>
            </div>
          </div>

          <div className="w-full md:col-span-2">
            <button
              type="submit"
              className="w-full bg-primary-blue text-white font-semibold py-2 px-6 uppercase"
            >
              SEARCH
            </button>
          </div>
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