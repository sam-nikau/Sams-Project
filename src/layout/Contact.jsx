import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import SuccessBand from '../components/SuccessBand'
import ErrorBand from '../components/ErrorBand'
import SubtitleText from '../components/SubtitleText'
import ParagraphText from '../components/ParagraphText'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
export default function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm('service_93pxk2g', 'template_bgarekm', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          // Reset form after sending email
          setName('')
          setEmail('')
          setMessage('')
          setLoading(false)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 5000)
        },
        (error) => {
          setError(true)
          setLoading(false)
        }
      )
  }

  const isFormValid = () => {
    return name.trim() !== '' && email.trim() !== '' && message.trim() !== ''
  }
  return (
    <div>
      {success && <SuccessBand />}
      {error && <ErrorBand />}

      <div className="flex justify-center w-full">
        <form
          className="card bg-white shadow-2xl w-2/3 my-16 py-8 px-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="form-control mb-4">
            <div className="label mb-1">
              <span className="label-text text-slate-800">Name</span>
            </div>
            <input
              type="text"
              placeholder="Helix Energy"
              className="input input-bordered input-acccent w-full"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-control mb-4">
            <div className="label mb-1">
              <span className="label-text text-slate-800">Email</span>
            </div>
            <input
              type="email"
              placeholder="name@site.com"
              className="input input-bordered w-full"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="form-control">
            <div className="label mb-1">
              <span className="label-text text-slate-800">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 w-full"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <div className="card-actions mt-8">
            <button
              className="btn bg-orange-500 hover:bg-orange-600 text-white w-24"
              disabled={!isFormValid()}
            >
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
