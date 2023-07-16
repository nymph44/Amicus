import Image from 'next/image'
import React from 'react'

function Table({ title }) {
  return (
    <div className="overflow-x-auto  bg-base-200 rounded-box max-w-4xl">
      <div className="p-4">
        <h2 className="p-4 text-xl font-bold badge badge-primary">{title}</h2>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>cover</th>
            <th>title</th>
            <th>Album</th>
            <th>Platform</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      className="rounded-full object-cover object-scale-up"
                      src="/264x264.jpg"
                      alt=""
                      width={264}
                      height={264}
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <p className="text-md font-bold text-base-content">Money Trees</p>

              <span className="text-sm text-base-content">Kendrick Lamar</span>
            </td>
            <td>good kid, m.A.A.d city(Deluxe)</td>
            <td>Spotify</td>
            <td>
              <button className="btn btn-sm btn-error">Delete</button>
            </td>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  )
}

export default Table
