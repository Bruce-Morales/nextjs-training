

export default function Page() {
    return ( 

    <main className="container">
    <h1 className="mt-4">Contact Information </h1>

    <div className="row g-3">
      <div className="bg-info-subtle col-md-6 col-lg-6">
        <h2 className="text-center"><u>Augustus</u></h2>
        <p>Augustus is the smaller of the two brothers, and is more vocal about when he wants something.</p>
        <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/Augustus.jpg" class="d-block w-100" alt="image failed to load" />
              </div>
              <div className="carousel-item">
                <img src="images/Dog 3.jpg" class="d-block w-100" alt="no image" />
              </div>
              <div className="carousel-item">
                <img src="images/aug2.jpg" class="d-block w-100" alt="waiting for image..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        <p className="text-center">Phone: 1-800-1234</p>
        <p className="text-center">Email: Dog@Canine.com</p>
    </div>
    <div className="bg-info-subtle col-md-6 col-lg-6">
        <h2 className="text-center"><u>Maximus</u></h2>
        <p>Maximus is the larger and stronger brother, and likes belly rubs and being pet. He is loud when afraid.</p>
        <div id="carouselmax" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/Maximus.jpg" class="d-block w-100" alt="image failed to load" />
              </div>
              <div className="carousel-item">
                <img src="images/max2.jpg" class="d-block w-100" alt="need to add image" />
              </div>
              <div className="carousel-item">
                <img src="images/max3.jpg" class="d-block w-100" alt="waiting for image..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselmax" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselmax" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        <p className="text-center">Phone: 1-800-4321</p>
        <p className="text-center">Email: Dog@Canine.com</p>
    </div>
</div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha256-bZLfwXAP04zRMK2BjiO8iu9pf4FbLqX6zitd+tIvLhE=" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous" async ></script>

<div className="container col-xs-12 col-sm-8 col-sm-offset-2 col-xl-6 col-xl-offset-3 my-4">
  <div className="row">
    <section className="container col-xs-12 col-sm-8 col-sm-offset-2 col-xl-6 col-xl-offset-3 my-4">
    <div className="container" style={{ width: '100%' }}>

        <form className="" target="_self" enctype="multipart/form-data" action="https://formkeep.com/f/966e84117f7b" accept-charset="UTF-8" method="post">
          <fieldset>
            <center><h2>Contact Us</h2></center>
            <br />
              <div className="row">
              <div className="form-group col-xs-6" id="First_Name__div">
              <label for="First_Name">First Name</label>
              <input type="text" name="First Name" id="First_Name" autofocus="autofocus" class="form-control" />
          </div>
              <div className="form-group col-xs-6" id="Last_Name__div">
              <label for="Last_Name">Last Name</label>
              <input type="text" name="Last Name" id="Last_Name" class="form-control" />
          </div>
          </div>
              <div className="row">
              <div className="form-group col-xs-6" id="Email__div">
              <label title="required" for="Email">Email *</label>
              <input type="email" name="Email" id="Email" required="required" placeholder="example@example.com" class="form-control" />
          </div>
              <div className="form-group col-xs-6" id="Phone__div">
              <label for="Phone">Phone</label>
              <input type="tel" name="Phone" id="Phone" placeholder="123-456-7890" class="form-control" />
          </div>
          </div>
              <div className="row">
              <div className="form-group col-xs-12" id="Dog_Requested__div">
              <label for="Dog_Requested">Dog Requested *</label>
              <select name="Dog Requested" id="Dog_Requested" required="required" class="form-control"><option value="">Choose</option>
<option value="Augustus">Augustus</option>
<option value="Maximus">Maximus</option></select>
          </div>
          </div>
              <div className="row">
              <div className="form-group col-xs-12" id="Message__div">
              <label title="required" for="Message">Message *</label>
              <textarea name="Message" id="Message" required="required" class="form-control">
</textarea>
              <small className="form-text text-muted">Please provide as much detail as you can to help speed our reply</small>
          </div>
          </div>
          <br />
          <div style={{ opacity: 0, position: 'absolute', top: 0, left: '-5000px', height: 0, width: 0 }}>
            <label for="subscribe_966e84117f7b_44295"></label>
            <input name="subscribe_966e84117f7b_44295" value="" tabindex="-1" autocomplete="off"
                   type="email" id="email_subscribe_966e84117f7b_44295" placeholder="Your email here" />
          </div>
          <div className="row">
            <div className="col-xs-12">
              <input type="submit" value="Submit" class="btn btn-block btn-primary" data-disable-with="Submit" />
            </div>
          </div>
        </fieldset>
</form>
<div style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '3rem' }}>
  <a style={{ color: '#868190', lineHeight: 0, padding: '3px', textDecoration: 'none', fontSize: '1em' }} target="_blank" rel="noopener noreferrer" href="https://formkeep.com/?utm_campaign=966e84117f7b&amp;utm_medium=web&amp;utm_source=formkeep-landingpage-free">
            Free forms by FormKeep &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" aria-labelledby="formkeep-logo__title" role="img" style={{ fill: '#868190', width: '3rem', marginBottom: '3px', verticalAlign: 'middle' }}>
  <title id="formkeep-logo__title">FormKeep</title>
  <g className="formkeep-logo__mark">
    <path d="M70.693,84.418743 C70.693,85.3699065 70.039,86.0825337 69.082,86.0825337 L32.992,86.0825337 C32.035,86.0825337 31.307,85.3699065 31.307,84.418743 L31.307,77.0360445 C31.307,76.154454 31.644,75.3116258 32.283,74.7003765 L36.619,70.5389119 L39.211,46.5053855 C39.281,45.856368 39.023,45.2143077 38.527,44.7869302 L35.035,41.7436045 C34.346,41.1522333 34,40.2915148 34,39.3860707 L34,27.6480968 C34,26.660159 34.702,25.8580807 35.697,25.8580807 L40.991,25.8580807 C41.928,25.8580807 42.752,26.6134456 42.752,27.5437372 L42.752,30.2073926 L47.129,30.2073926 L47.129,27.626231 C47.129,26.65022 47.956,25.8580807 48.938,25.8580807 L53.284,25.8580807 C54.22,25.8580807 54.871,26.6134456 54.871,27.5437372 L54.871,30.2073926 L59.247,30.2073926 L59.247,27.7017675 C59.247,26.6840126 60.217,25.8580807 61.241,25.8580807 L66.482,25.8580807 C67.418,25.8580807 68.337,26.6134456 68.337,27.5437372 L68.337,39.6305705 C68.337,40.389911 67.97,41.1224162 67.454,41.6819827 L63.765,44.8237045 C63.297,45.2282224 63.037,45.8345021 63.103,46.4467453 L65.697,70.5389119 L70.034,74.9329494 C70.498,75.3961074 70.693,76.0232591 70.693,76.6772461 L70.693,84.418743 L70.693,84.418743 Z M93.524,21.7890489 L59.543,2.27280371 C54.261,-0.757601237 47.768,-0.757601237 42.486,2.27280371 L8.506,21.7890489 C2.262,25.1871973 0,30.4220753 0,36.4838791 L0,75.5153755 C0,81.5781732 3.231,87.1798007 8.513,90.2102057 L42.512,109.726451 C47.794,112.75785 54.297,112.75785 59.579,109.726451 L93.526,90.2102057 C98.809,87.1798007 102,81.5781732 102,75.5153755 L102,36.4838791 C102,30.4220753 98.806,24.8204477 93.524,21.7890489 L93.524,21.7890489 Z"></path>
    <path d="M51.136,59.906 C48.366,59.833 46.119,62.265 46.119,65.036 L46.119,75.412 C46.119,75.976 46.66,76.488 47.224,76.488 L54.725,76.488 C55.358,76.488 55.881,75.921 55.881,75.288 L55.881,65.036 C55.881,62.247 53.898,59.978 51.136,59.906"></path>
  </g>
</svg>
</a>        </div>
      </div>
    </section>
  </div>
</div>
</main>

    )
    
  }