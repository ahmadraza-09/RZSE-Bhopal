import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteName = "HomeFixPro - Appliance Repair Services";
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage =
    "https://images.pexels.com/photos/7512536/pexels-photo-7512536.jpeg?auto=compress&cs=tinysrgb&w=1200";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      {url && <meta property="og:url" content={url} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
