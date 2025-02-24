import Footer from '../Footer';
import Header from '../Header';

type FixedLayoutProps = {
  children: React.ReactNode;
};

const FixedLayout: React.FC<FixedLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default FixedLayout;
