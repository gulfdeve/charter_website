export async function generateMetadata({ params, searchParams }, parent) {
  // read route params

  // fetch data
  const product = await fetch(`https://www.centauruscharter.net/api/api_new/basic`).then(res => res.json());
  const yacht = data.product.find(item => item.slug === slug);
  // optionally access and extend (rather than replace) parent metadata

  return {
    title: yacht.translations?.[locale]?.meta_title,
  };
}

export default function Page({ params, searchParams }) {}
