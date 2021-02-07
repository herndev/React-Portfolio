import React from 'react';

function ContactForm() {
  return (
    <div className="card text-center mt-4 crv-8 p-3 bx-shadow bg-primary-default">
      <h4 className="text-left font-weight-bold text-yellow">
        Let's talk
                    </h4>
      <form action="#" method="post" className="mt-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text ion-person"></span>
          </div>
          <input type="text" className="form-control" id="fh_key" name="fh_key" placeholder="Name (Optional)"  />
                        </div>
          <div className="input-group mt-2">
            <div className="input-group-prepend">
              <span className="input-group-text ion-email"></span>
            </div>
            <input type="text" className="form-control" id="fh_key" name="fh_key" placeholder="Email" />
                        </div>
            <textarea name="message" id="message" rows="5" className="form-control mt-2" placeholder="Message"></textarea>
            <button className="btn btn-warning btn-block mt-3 crv-25">Send now</button>
                    </form>
        </div>
  );
}

export default ContactForm;
