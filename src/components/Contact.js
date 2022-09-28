import { Player } from "@lottiefiles/react-lottie-player";
import { Form } from "reactstrap";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("xaykojgd");
  const message = () => {
    if (state.succeeded) {
      window.alert("Mesajınız Alınmıştır");
    }
  }
  return (
    <>
        <Navbar></Navbar>
       
 {message()}
      <div className="hidden sm:block" aria-hidden="true">
        <div className="text-center p-4 block text-sm font-bold text-gray-700" >BİZİMLE İLETİŞİME GEÇİN </div>
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">

              <Player
                loop
                autoplay src={"https://assets7.lottiefiles.com/packages/lf20_in4cufsz.json"}>



              </Player>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <Form onSubmit={handleSubmit}
            >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Ad
                      </label>


                      <input


                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"

                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Soyad
                      </label>
                      <input

                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email Adres
                      </label>

                      <input

                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4" >
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Düşünceleriniz</label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    </div>


                  </div>
                </div>


                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={state.submitting}
                  >
                    Kaydet

                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}




export default Contact
