'use client'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const addlibrarySchema = Yup.object().shape({
  category: Yup.string()
  .min(3, 'Category must be at least 3 characters long')
  .max(20, 'Category cannot exceed 20 characters')
  .matches(/^[A-Za-z\s]+$/, 'Category must contain only letters and spaces')
  .required('Category is required'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  version: Yup.string()
    .required('Version is required'),
  packagename: Yup.string()
    .min(6, 'Package name must be at least 6 characters')
    .max(50, 'Package name must be at most 50 characters')
    .required('Package name is required'),
  tags: Yup.string()
    .required('Tag is required'),
  description: Yup.string()
    .required('Description is required'),
  downloads: Yup.string()
    .required('Downloads is required'),
  updated: Yup.string()
    .required('Update date is required'),
  link: Yup.string()
    
    .required('Link is required'),
  language: Yup.string()
    .required('Language is required'),
  createdAt: Yup.string()
    .required('Creation date is required'),
});

const AddLibrary = () => {
  const addlibraryform=useFormik({
    initialValues:{
      category:'',
      name:'',
      version:'',
      packagename:'',
      tags:'',
      description:'',
      downloads:'',
      updated:'',
      link:'',
      language:'',
      createdAt:'',
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values)
      resetForm()
    },
    validationSchema:addlibrarySchema
  })
  return (
    <div>
        <>
  {/* Card Section */}
  <div className="max-w-4xl bg-gray-800 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <form onSubmit={addlibraryform.handleSubmit}>
      {/* Card */}
      <div className="bg-white rounded-xl shadow ">
        <div className="relative h-40 rounded-t-xl bg-[url('https://i.pinimg.com/474x/c6/1c/12/c61c120c9c1d2cf61511ebe6c902c073.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute top-0 end-0 p-4">
        </div>
        </div>
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          {/* Grid */}
          <div className="space-y-4 sm:space-y-6">
            <div>
            
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
                
                <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                  
                 
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="af-submit-app-project-name"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Category
              </label>
              {addlibraryform.errors.category && addlibraryform.touched.category?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.category}</div>
              ):null}
              
              <input
               // id="af-submit-app-project-name"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter category name"
                id="category"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.category}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Name
              </label>
              {addlibraryform.errors.name && addlibraryform.touched.name?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.name}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter Library Name"
                id="name"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.name}
              />
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Version
              </label>
              {addlibraryform.errors.version && addlibraryform.touched.version?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.version}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter Library Version"
                id="version"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.version}
              />
              
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Package_Name
              </label>
              {addlibraryform.errors.packagename && addlibraryform.touched.packagename?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.packagename}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter package_name"
                id="packagename"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.packagename}
              />
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Tags
              </label>
              {addlibraryform.errors.tags && addlibraryform.touched.tags?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.tags}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full bg-white border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter tags"
                id="tags"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.tags}
              />
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Description
              </label>
              {addlibraryform.errors.description && addlibraryform.touched.description?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.description}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter description"
                id="description"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.description}
              />
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Downloads
              </label>
              {addlibraryform.errors.downloads && addlibraryform.touched.downloads?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.downloads}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="download"
                id="downloads"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.downloads}
              />
            </div>
            
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Updated
              </label>
              {addlibraryform.errors.updated && addlibraryform.touched.updated?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.updated}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Update Library"
                id="updated"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.updated}
              />
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Link
              </label>
              {addlibraryform.errors.link && addlibraryform.touched.link?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.link}</div>
              ):null}
              <input
               // id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Library link"
                id="link"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.link}
              />
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                Language
              </label>
              {addlibraryform.errors.language && addlibraryform.touched.language?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.language}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="language you want ?"
                id="language"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.language}
              />
            </div>
            <div className="space-y-2">
            <label
                htmlFor="af-submit-project-url"
                className="inline-block text-xl font-bold text-gray-800 mt-0.5"
              >
                CreatedAt
              </label>
              {addlibraryform.errors.createdAt && addlibraryform.touched.createdAt?(
                <div className='text-red-500 text-sm'>{addlibraryform.errors.createdAt}</div>
              ):null}
              <input
                //id="af-submit-project-url"
                type="text"
                className="py-2 px-3 pe-11 block w-full  bg-white border border-gray-300  border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="createdAt.."
                id="createdAt"
                onChange={addlibraryform.handleChange}
                value={addlibraryform.values.createdAt}
              />
            </div>
          </div>
          {/* End Grid */}
          <div className="mt-5 flex justify-center gap-x-2">
            <button
              type="submit"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit your details
            </button>
          </div>
        </div>
      </div>
      {/* End Card */}
    </form>
  </div>
  {/* End Card Section */}
</>

    </div>
  )
}

export default AddLibrary