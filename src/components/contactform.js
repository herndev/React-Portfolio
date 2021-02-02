import React from 'react';

function ContactForm() {
  return (
    <div class="card text-center mt-4 crv-8 p-3 bx-shadow bg-primary-default">
      <h4 class="text-left font-weight-bold text-yellow">
        Let's talk
                    </h4>
      <form action="#" method="post" class="mt-2">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text ion-person"></span>
          </div>
          <input type="text" class="form-control" id="fh_key" name="fh_key" placeholder="Name (Optional)"  />
                        </div>
          <div class="input-group mt-2">
            <div class="input-group-prepend">
              <span class="input-group-text ion-email"></span>
            </div>
            <input type="text" class="form-control" id="fh_key" name="fh_key" placeholder="Email" />
                        </div>
            <textarea name="message" id="message" rows="5" class="form-control mt-2" placeholder="Message"></textarea>
            <button class="btn btn-warning btn-block mt-3 crv-25">Send now</button>
                    </form>
        </div>
  );
}

export default ContactForm;
