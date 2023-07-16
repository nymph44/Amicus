import Image from 'next/image'
import Table from './components/Table'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-4">
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-3/4"
          />
          <button className="btn btn-lg rounded-box btn-primary w-1/4">
            Search
          </button>
        </div>
        <Table title="Recently Added" />
        <Table title="Added by user X" />
        <Table title="Best of 80's" />
      </div>
    </main>
  )
}
