import { FC } from 'react';
// Images
import CatNotFound from '../../assets/images/pages/404-page-not-found-cat.png';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';

const Error404: FC = () => {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Error'} desc={`Error page Not Found.`} />

      {/* Page */}
      <div className='grid min-h-screen h-screen max-h-screen overflow-hidden w-full bg-main-background font-poppins'>
        <div className='grid grid-rows-reg h-full w-full overflow-hidden'>
          {/* Navigation */}
          <Navbar />

          {/* Main page content */}
          <main role='main' className='grid w-full h-full overflow-hidden'>
            <section className='grid w-full text-center h-full items-center justify-center z-10'>
              <div className='grid gap-2'>

                {/* Dialog */}
                <article className='outline outline-2 font-semibold outline-black -mt-10 p-2 rounded'>
                  <h1 className='text-4xl'>
                    ERROR <span className='text-error-red'>404</span>
                  </h1>
                  <h2 className='text-4xl'>PAGE NOT FOUND</h2>
                </article>

                <article className='outline outline-2 font-semibold outline-black rounded'>
                  <h3>But you found a friend 💖</h3>
                </article>
              </div>
            </section>

            <section className='flex justify-end lg:mr-20'>
              <img src={CatNotFound} alt='Lost cat for error page that is funny and cute.' />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Error404;
