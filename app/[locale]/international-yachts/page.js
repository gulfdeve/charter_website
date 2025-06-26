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
          <input type="hidden" name="priceMin" value="1000" />
          <input type="hidden" name="priceMax" value="5000" />
          
          <div className="w-full mb-2 md:mb-0">
            <input
              name="name"
              placeholder="VESSEL NAME"
              defaultValue={searchParams.name || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="w-full mb-2 md:mb-0">
            <select
              name="region"
              defaultValue={searchParams.region || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            >
              <option value="">CHOOSE DESTINATION</option>
              <option value="Abacos">Abacos</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Aegean Sea">Aegean Sea</option>
              <option value="Africa">Africa</option>
              <option value="Ajaccio">Ajaccio</option>
              <option value="Alghero">Alghero</option>
              <option value="Alicante">Alicante</option>
              <option value="America">America</option>
              <option value="Angra dos Reis">Angra dos Reis</option>
              <option value="Annapolis">Annapolis</option>
              <option value="Antalya">Antalya</option>
              <option value="Antibes">Antibes</option>
              <option value="Antigua">Antigua</option>
              <option value="Asia">Asia</option>
              <option value="Athens (Alimos)">Athens (Alimos)</option>
              <option value="Athens (Lavrion)">Athens (Lavrion)</option>
              <option value="Atlantic Ocean">Atlantic Ocean</option>
              <option value="Australia">Australia</option>
              <option value="Azores">Azores</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Balearic Islands">Balearic Islands</option>
              <option value="Bali">Bali</option>
              <option value="Baltic Sea">Baltic Sea</option>
              <option value="Bandol">Bandol</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Baska Voda">Baska Voda</option>
              <option value="Bastia">Bastia</option>
              <option value="Belize">Belize</option>
              <option value="Biograd">Biograd</option>
              <option value="Bodrum">Bodrum</option>
              <option value="Bonifacio">Bonifacio</option>
              <option value="Bora Bora">Bora Bora</option>
              <option value="Brazil">Brazil</option>
              <option value="British Columbia">British Columbia</option>
              <option value="British Virgin Islands">British Virgin Islands</option>
              <option value="Burma">Burma</option>
              <option value="Cagliari">Cagliari</option>
              <option value="Cala Galera">Cala Galera</option>
              <option value="Calabria">Calabria</option>
              <option value="Calvi">Calvi</option>
              <option value="Campania">Campania</option>
              <option value="Canada">Canada</option>
              <option value="Canary Islands">Canary Islands</option>
              <option value="Cancun">Cancun</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Capri">Capri</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Carloforte">Carloforte</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Cascais">Cascais</option>
              <option value="Castiglioncello">Castiglioncello</option>
              <option value="Catalonia">Catalonia</option>
              <option value="Catania">Catania</option>
              <option value="Cefalu">Cefalu</option>
              <option value="Chalkidiki">Chalkidiki</option>
              <option value="China">China</option>
              <option value="Cienfuegos">Cienfuegos</option>
              <option value="Civitavecchia">Civitavecchia</option>
              <option value="Colombia">Colombia</option>
              <option value="Corfu">Corfu</option>
              <option value="Corsica">Corsica</option>
              <option value="Costa Blanca">Costa Blanca</option>
              <option value="Cres">Cres</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyclades">Cyclades</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Dalian">Dalian</option>
              <option value="Dalmatia">Dalmatia</option>
              <option value="Denia">Denia</option>
              <option value="Dodecanese">Dodecanese</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Dubai">Dubai</option>
              <option value="Dubrovnik">Dubrovnik</option>
              <option value="Elba">Elba</option>
              <option value="Epidaurus">Epidaurus</option>
              <option value="Exumas">Exumas</option>
              <option value="Faro">Faro</option>
              <option value="Fethiye">Fethiye</option>
              <option value="Fiji">Fiji</option>
              <option value="Finike">Finike</option>
              <option value="Florida">Florida</option>
              <option value="Florida Keys">Florida Keys</option>
              <option value="Follonica">Follonica</option>
              <option value="Fort Lauderdale">Fort Lauderdale</option>
              <option value="France">France</option>
              <option value="French Riviera">French Riviera</option>
              <option value="Genoa">Genoa</option>
              <option value="Germany">Germany</option>
              <option value="Gocek">Gocek</option>
              <option value="Golfe Juan">Golfe Juan</option>
              <option value="Gran Canaria">Gran Canaria</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Grenadines">Grenadines</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Hauraki">Hauraki</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Huahine">Huahine</option>
              <option value="Hyeres">Hyeres</option>
              <option value="Ibiza">Ibiza</option>
              <option value="Indian Ocean">Indian Ocean</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Ionian Sea">Ionian Sea</option>
              <option value="Ischia">Ischia</option>
              <option value="Istria">Istria</option>
              <option value="Italy">Italy</option>
              <option value="Koh Chang">Koh Chang</option>
              <option value="Koh Samui">Koh Samui</option>
              <option value="Komodo">Komodo</option>
              <option value="Kornati">Kornati</option>
              <option value="Kos">Kos</option>
              <option value="Kotor">Kotor</option>
              <option value="Kremik">Kremik</option>
              <option value="Kusadasi">Kusadasi</option>
              <option value="La Maddalena">La Maddalena</option>
              <option value="La Paz">La Paz</option>
              <option value="La Spezia">La Spezia</option>
              <option value="Lagos">Lagos</option>
              <option value="Langkawi">Langkawi</option>
              <option value="Lanzarote">Lanzarote</option>
              <option value="Lazio">Lazio</option>
              <option value="Lefkada">Lefkada</option>
              <option value="Liguria">Liguria</option>
              <option value="Lisbon">Lisbon</option>
              <option value="Los Roques Archipelago">Los Roques Archipelago</option>
              <option value="Macinaggio">Macinaggio</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Madeira">Madeira</option>
              <option value="Mahe">Mahe</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Malta">Malta</option>
              <option value="Margarita Island">Margarita Island</option>
              <option value="Marina degli Aregai">Marina degli Aregai</option>
              <option value="Marmaris">Marmaris</option>
              <option value="Marquesas Islands">Marquesas Islands</option>
              <option value="Marsala">Marsala</option>
              <option value="Marseille">Marseille</option>
              <option value="Martinique">Martinique</option>
              <option value="Maryland">Maryland</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Menorca">Menorca</option>
              <option value="Mexico">Mexico</option>
              <option value="Miami">Miami</option>
              <option value="Middle East">Middle East</option>
              <option value="Milazzo">Milazzo</option>
              <option value="Monaco">Monaco</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Muggia">Muggia</option>
              <option value="Murter">Murter</option>
              <option value="Mykonos">Mykonos</option>
              <option value="Mystic, CT">Mystic, CT</option>
              <option value="Naples">Naples</option>
              <option value="Nassau">Nassau</option>
              <option value="Nettuno">Nettuno</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New England">New England</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Newport, RI">Newport, RI</option>
              <option value="Nha Trang">Nha Trang</option>
              <option value="Nice">Nice</option>
              <option value="Norway">Norway</option>
              <option value="Nosy Be">Nosy Be</option>
              <option value="Olbia">Olbia</option>
              <option value="Opua">Opua</option>
              <option value="Pacific Coast">Pacific Coast</option>
              <option value="Pacific Ocean">Pacific Ocean</option>
              <option value="Palamos">Palamos</option>
              <option value="Palau">Palau</option>
              <option value="Palermo">Palermo</option>
              <option value="Palma de Mallorca">Palma de Mallorca</option>
              <option value="Panama">Panama</option>
              <option value="Paraty">Paraty</option>
              <option value="Paros">Paros</option>
              <option value="Philippines">Philippines</option>
              <option value="Phuket">Phuket</option>
              <option value="Placencia">Placencia</option>
              <option value="Polynesia">Polynesia</option>
              <option value="Porec">Porec</option>
              <option value="Poros">Poros</option>
              <option value="Portisco">Portisco</option>
              <option value="Porto Cervo">Porto Cervo</option>
              <option value="Porto Vecchio">Porto Vecchio</option>
              <option value="Portofino">Portofino</option>
              <option value="Portorosa">Portorosa</option>
              <option value="Portugal">Portugal</option>
              <option value="Pozzuoli">Pozzuoli</option>
              <option value="Praslin">Praslin</option>
              <option value="Preveza">Preveza</option>
              <option value="Procida">Procida</option>
              <option value="Propriano">Propriano</option>
              <option value="Provence">Provence</option>
              <option value="Puerto La Cruz">Puerto La Cruz</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Pula">Pula</option>
              <option value="Punat">Punat</option>
              <option value="Punta Ala">Punta Ala</option>
              <option value="Qingdao">Qingdao</option>
              <option value="Raiatea">Raiatea</option>
              <option value="Reggio di Calabria">Reggio di Calabria</option>
              <option value="Rhodes">Rhodes</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rogoznica">Rogoznica</option>
              <option value="Rome">Rome</option>
              <option value="Roses">Roses</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent">Saint Vincent</option>
              <option value="Saint-Florent">Saint-Florent</option>
              <option value="Saint-Mandrier-sur-Mer">Saint-Mandrier-sur-Mer</option>
              <option value="Saint-Raphael">Saint-Raphael</option>
              <option value="Saint-Tropez">Saint-Tropez</option>
              <option value="Salerno">Salerno</option>
              <option value="Salina">Salina</option>
              <option value="Salvador de Bahia">Salvador de Bahia</option>
              <option value="Samos">Samos</option>
              <option value="San Blas">San Blas</option>
              <option value="San Francisco">San Francisco</option>
              <option value="San Pedro">San Pedro</option>
              <option value="Sanremo">Sanremo</option>
              <option value="Santa Teresa Gallura">Santa Teresa Gallura</option>
              <option value="Santorini">Santorini</option>
              <option value="Sanya">Sanya</option>
              <option value="Sardinia">Sardinia</option>
              <option value="Seattle">Seattle</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sibenik">Sibenik</option>
              <option value="Sicily">Sicily</option>
              <option value="Singapore">Singapore</option>
              <option value="Sint Maarten/Saint-Martin">Sint Maarten/Saint-Martin</option>
              <option value="Skiathos">Skiathos</option>
              <option value="Society Islands">Society Islands</option>
              <option value="Solenzara">Solenzara</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Spain">Spain</option>
              <option value="Split">Split</option>
              <option value="Sporades">Sporades</option>
              <option value="Sukosan">Sukosan</option>
              <option value="Sumatra">Sumatra</option>
              <option value="Sweden">Sweden</option>
              <option value="Syracuse">Syracuse</option>
              <option value="Syros">Syros</option>
              <option value="Taha'a">Taha'a</option>
              <option value="Tahiti">Tahiti</option>
              <option value="Tampa">Tampa</option>
              <option value="Tarragona">Tarragona</option>
              <option value="Tarutao">Tarutao</option>
              <option value="Tenerife">Tenerife</option>
              <option value="Thailand">Thailand</option>
              <option value="Tioman">Tioman</option>
              <option value="Tonga">Tonga</option>
              <option value="Toulon">Toulon</option>
              <option value="Trapani">Trapani</option>
              <option value="Trieste">Trieste</option>
              <option value="Trinidad">Trinidad</option>
              <option value="Trogir">Trogir</option>
              <option value="Tropea">Tropea</option>
              <option value="Tuamotus">Tuamotus</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkish Riviera">Turkish Riviera</option>
              <option value="Turks & Caicos">Turks & Caicos</option>
              <option value="Tuscany">Tuscany</option>
              <option value="US Virgin Islands">US Virgin Islands</option>
              <option value="USA">USA</option>
              <option value="Union Islands">Union Islands</option>
              <option value="Valencia">Valencia</option>
              <option value="Vancouver">Vancouver</option>
              <option value="Varazze">Varazze</option>
              <option value="Veneto">Veneto</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Venice">Venice</option>
              <option value="Viareggio">Viareggio</option>
              <option value="Vibo Valentia">Vibo Valentia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Volos">Volos</option>
              <option value="Vounaki">Vounaki</option>
              <option value="Whitsundays">Whitsundays</option>
              <option value="Xiamen">Xiamen</option>
              <option value="Zadar">Zadar</option>
              <option value="Zanzibar">Zanzibar</option>
              {/* … */}
            </select>
          </div>

          <div className="w-full mb-2 md:mb-0">
            <select
              name="yachtType"
              defaultValue={searchParams.yachtType || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            >
              <option value="">CHOOSE TYPE OF BOAT</option>
              <option value="Sailboat">Gulet</option>
              {/* … */}
            </select>
          </div>

          <div className="w-full mb-2 md:mb-0">
            <select
              name="charterType"
              defaultValue={searchParams.charterType || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            >
              <option value="">CHOOSE TYPE OF CHARTER</option>
              <option value="Crewed">Crewed</option>
              <option value="Bareboat">Bareboat</option>
            </select>
          </div>

          <div className="w-full mb-2 md:mb-0">
            <MultiDatePicker
              name="rentalPeriod"
              defaultDates={searchParams.rentalPeriod || []}
            />
          </div>

          <div className="w-full mb-2 md:mb-0">
            <input
              name="minLength"
              placeholder="MIN LENGTH"
              defaultValue={searchParams.minLength || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="w-full mb-2 md:mb-0">
            <input
              name="maxLength"
              placeholder="MAX LENGTH"
              defaultValue={searchParams.maxLength || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            />
          </div>

          <div className="w-full mb-2 md:mb-0">
            <input
              name="sleeps"
              placeholder="SLEEPS"
              defaultValue={searchParams.sleeps || ""}
              className="block w-full border border-gray-300 py-2 px-3 focus:outline-none"
            />
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

      {/* Client-side component to handle API calls */}
      <ClientSearchResults searchParams={searchParams} hasParams={hasParams} />
    </div>
  );
}