<template>
  <body class="bg-white">
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div class="container-xl px-4">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="text-center mt-4">
                  <img
                    class="img-fluid p-4"
                    src="../assets/images/403-error-forbidden.svg"
                    alt=""
                  />
                  <p class="lead">
                    Your client does not have permission to get this page from
                    the server.
                  </p>
                  <a class="text-arrow-icon" href="dashboard-1.html">
                    <i class="ms-0 me-1" data-feather="arrow-left"></i>
                    Return to Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutError_footer">
        <footer class="footer-admin mt-auto footer-light">
          <div class="container-xl px-4">
            <div class="row">
              <div class="col-md-6 small">
                Copyright &copy; Your Website 2021
              </div>
              <div class="col-md-6 text-md-end small">
                <a href="#!">Privacy Policy</a>
                &middot;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>
