import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import Search1 from '../components/Search1';
import Tab from '../components/Tab';
import ArticleCard from '../components/ArticleCard'; // card component

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Admin Dashboard" />
      </Head>

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 ">
          {/* TopBar */}
          <TopBar />

          {/* Search / Action Bar */}
          <Search1 />

          {/* Tab Menu */}
          <div className="p-4">
            <Tab />
          </div>

          {/* Page Content */}
          <main className="flex-1 p-4 sm:p-6">
            {/* Grid of Cards - 4 per row on large screens, 2 on medium, 1 on small */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ArticleCard
                imageSrc="/images/1.png"
                title="How 7 lines of code turned into a $36B empire"
                category="Business"
                date="20 Sep 2022"
                status="Published"
                statusColor="bg-green-100 text-green-800"
              />
              <ArticleCard
                imageSrc="/images/2.png"
                title="Chez Pierre: Restaurant in Monte Carlo"
                category="Business"
                date="20 Sep 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
              <ArticleCard
                imageSrc="/images/3.png"
                title="Teknion wins Gold at 2022 Design Awards"
                category="Politics"
                date="20 Sep 2022"
                status="Draft"
                statusColor="bg-gray-300 text-gray-600"
              />
              <ArticleCard
                imageSrc="/images/4.png"
                title="AI disrupting the Creative Industry"
                category="Tech"
                date="22 Oct 2022"
                status="Published"
                statusColor="bg-green-100 text-green-800"
              />
              <ArticleCard
                imageSrc="/images/5.png"
                title="New Sports Policy for Youth Development"
                category="Sports"
                date="10 Nov 2022"
                status="Draft"
                statusColor="bg-yellow-100 text-yellow-800"
              />
              <ArticleCard
                imageSrc="/images/6.png"
                title="Chez pierre restaurant in Monte Carlo by Vuidafieri"
                category="Culture"
                date="2 Dec 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
              <ArticleCard
                imageSrc="/images/7.png"
                title="Teknion wins Gold at 2022 International Design Awards"
                category="Culture"
                date="2 Dec 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
              <ArticleCard
                imageSrc="/images/8.png"
                title="How 7 lines code turned into $36 Billion Empire"
                category="Culture"
                date="2 Dec 2022"
                status="Created"
                statusColor="bg-blue-100 text-blue-800"
              />
              {/* Add more cards here as needed */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
