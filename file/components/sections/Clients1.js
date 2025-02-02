import Link from "next/link"
const Clients1 = () => {
  return (
  <>
  <section className="clients-section pt-0">
    <div className="bg bg-pattern-8"></div>
    <div className="auto-container">
      <div className="row">
        <div className="title-column col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInLeft">
          <div className="inner-column">
            <div className="sec-title mb-0">
              <span className="sub-title">thank you for giving</span>
              <h2>Valuable Partners</h2>
              <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.</div>
            </div>
          </div>
        </div>
        <div className="images-column col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
          <div className="inner-column">
            <div className="sponsors-outer">
              <div className="row">
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href="page-gift"><img src="images/clients/1.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href="page-gift"><img src="images/clients/2.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href="page-gift"><img src="images/clients/3.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href="page-gift"><img src="images/clients/4.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href="page-gift"><img src="images/clients/5.png" alt="Image"/></Link></figure>
                </div>
                <div className="client-block col-lg-4 col-md-6">
                  <figure className="image"><Link href="page-gift"><img src="images/clients/6.png" alt="Image"/></Link></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};
export default Clients1