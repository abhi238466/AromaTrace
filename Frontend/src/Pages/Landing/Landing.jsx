import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  TruckIcon,
  ChartBarIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const Landing = () => {
  return (
    <div className="min-h-screen bg-base-100">

      {/* NAVBAR */}
      <div className="navbar px-6 lg:px-16 shadow-sm bg-base-100 sticky top-0 z-50">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-primary">
            AromaTrace
          </h1>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#features" className="hover:text-primary">
            Features
          </a>

          <a href="#workflow" className="hover:text-primary">
            Workflow
          </a>

          <a href="#stats" className="hover:text-primary">
            Statistics
          </a>

          <Link
            to="/login"
            className="btn btn-outline btn-primary btn-sm"
          >
            Login
          </Link>

          <Link
            to="/login"
            className="btn btn-primary btn-sm"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}

      <section className="px-6 lg:px-20 py-10 lg:py-16 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <div className="badge badge-primary badge-lg mb-5">
              Essential Oil Traceability Platform
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15]">
              Track Every
              <span className="text-primary"> Batch</span>
              <br />
              With Confidence
            </h1>

            <p className="mt-6 text-base lg:text-lg opacity-80 leading-7">
              AromaTrace enables essential oil manufacturers to manage
              inventory, monitor production batches, track dispatches,
              and maintain end-to-end product traceability from source
              to customer.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <Link
                to="/login"
               className="btn btn-primary px-8"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="btn btn-outline btn-primary px-8"
              >
                Login
              </Link>

            </div>

            <div className="stats shadow mt-10 w-full">

              <div className="stat">
                <div className="stat-value text-primary">
                  1000+
                </div>
                <div className="stat-desc">
                  Batches Tracked
                </div>
              </div>

              <div className="stat">
                <div className="stat-value text-success">
                  500+
                </div>
                <div className="stat-desc">
                  Dispatch Records
                </div>
              </div>

              <div className="stat">
                <div className="stat-value text-warning">
                  99%
                </div>
                <div className="stat-desc">
                  Accuracy
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div className="bg-primary text-primary-content rounded-3xl p-8 lg:p-10 shadow-2xl max-w-xl mx-auto">

              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Why AromaTrace?
              </h2>

              <div className="space-y-5">

                <div className="flex gap-4 items-start">
                  <ShieldCheckIcon className="w-9 h-9 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Complete Traceability
                    </h3>
                    <p className="text-sm opacity-90">
                      Track every batch from raw material sourcing to customer delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <CubeTransparentIcon className="w-9 h-9 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Batch Management
                    </h3>
                    <p className="text-sm opacity-90">
                      Manage production batches with complete lifecycle visibility.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <DocumentTextIcon className="w-9 h-9 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Certificate Generation
                    </h3>
                    <p className="text-sm opacity-90">
                      Generate quality reports and traceability certificates instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <TruckIcon className="w-9 h-9 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Dispatch Tracking
                    </h3>
                    <p className="text-sm opacity-90">
                      Monitor shipments and delivery status in real time.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="px-6 lg:px-20 py-16 bg-base-200 scroll-mt-20"
      >

        <div className="text-center mb-10">

          <h2 className="text-3xl lg:text-4xl font-bold">
            Powerful Features
          </h2>

          <p className="mt-3 opacity-70">
            Everything needed to manage and trace essential oil operations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <CubeTransparentIcon className="w-12 h-12 text-primary" />
              <h3 className="card-title">
                Batch Management
              </h3>
              <p>
                Create and manage production batches efficiently.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <TruckIcon className="w-12 h-12 text-primary" />
              <h3 className="card-title">
                Dispatch Monitoring
              </h3>
              <p>
                Monitor dispatch records and product movement.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <DocumentTextIcon className="w-12 h-12 text-primary" />
              <h3 className="card-title">
                PDF Certificates
              </h3>
              <p>
                Generate certificates and traceability reports.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <ChartBarIcon className="w-12 h-12 text-primary" />
              <h3 className="card-title">
                Analytics
              </h3>
              <p>
                View inventory and dispatch insights.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <CloudIcon className="w-12 h-12 text-primary" />
              <h3 className="card-title">
                Cloud Storage
              </h3>
              <p>
                Secure MongoDB Atlas cloud storage.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="card-body">
              <ShieldCheckIcon className="w-12 h-12 text-primary" />
              <h3 className="card-title">
                Secure Access
              </h3>
              <p>
                JWT authentication and protected routes.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* WORKFLOW */}

      <section
        id="workflow"
        className="py-16 px-6 lg:px-20 max-w-7xl mx-auto scroll-mt-20"
      >

        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          How AromaTrace Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="card bg-base-200 shadow text-center">
            <div className="card-body items-center">
              <div className="text-4xl mb-2">✅</div>
              <h3 className="font-semibold">Batch Creation</h3>
            </div>
          </div>

          <div className="card bg-base-200 shadow text-center">
            <div className="card-body items-center">
              <div className="text-4xl mb-2">📦</div>
              <h3 className="font-semibold">Inventory Entry</h3>
            </div>
          </div>

          <div className="card bg-base-200 shadow text-center">
            <div className="card-body items-center">
              <div className="text-4xl mb-2">🚚</div>
              <h3 className="font-semibold">Dispatch Tracking</h3>
            </div>
          </div>

          <div className="card bg-base-200 shadow text-center">
            <div className="card-body items-center">
              <div className="text-4xl mb-2">📄</div>
              <h3 className="font-semibold">Certificate Generation</h3>
            </div>
          </div>

        </div>

      </section>

      {/* STATISTICS */}

      <section
        id="stats"
        className="py-16 bg-base-200 scroll-mt-20"
      >

        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Statistics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20 max-w-7xl mx-auto">

          <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
            <div className="stat-value text-primary">
              1000+
            </div>
            <div className="stat-title">
              Batch Records
            </div>
          </div>

          <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
            <div className="stat-value text-success">
              500+
            </div>
            <div className="stat-title">
              Inventory Entries
            </div>
          </div>

          <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
            <div className="stat-value text-warning">
              99%
            </div>
            <div className="stat-title">
              Sales Transactions
            </div>
          </div>

          <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
            <div className="stat-value text-secondary">
              24/7
            </div>
            <div className="stat-title">
              Cloud Availability
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer footer-center p-8 bg-base-300">

        <div>

          <h2 className="text-2xl font-bold">
            AromaTrace
          </h2>

          <p>
            Essential Oil Traceability &
            Inventory Management Platform
          </p>

          <p>
            © 2026 AromaTrace
            All Rights Reserved
          </p>

          <p className="text-xs opacity-60">
            Built using MERN Stack | MongoDB Atlas | React | Node.js
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Landing;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ShieldCheckIcon,
//   CubeTransparentIcon,
//   DocumentTextIcon,
//   TruckIcon,
//   ChartBarIcon,
//   CloudIcon,
// } from "@heroicons/react/24/outline";

// const Landing = () => {
//   return (
//     <div className="min-h-screen bg-base-100">

//       {/* NAVBAR */}
//       <div className="navbar px-6 lg:px-16 shadow-sm bg-base-100 sticky top-0 z-50">
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold text-primary">
//             AromaTrace
//           </h1>
//         </div>

//         <div className="hidden md:flex gap-6 items-center">
//           <a href="#features" className="hover:text-primary">
//             Features
//           </a>

//           <a href="#workflow" className="hover:text-primary">
//             Workflow
//           </a>

//           <a href="#stats" className="hover:text-primary">
//             Statistics
//           </a>

//           <Link
//             to="/login"
//             className="btn btn-primary btn-sm"
//           >
//             Login
//           </Link>
//         </div>
//       </div>

//       {/* HERO SECTION */}

//       <section className="px-6 lg:px-20 py-10 lg:py-16 max-w-7xl mx-auto">

//         <div className="grid lg:grid-cols-2 gap-10 items-center">

//           <div>

//             <div className="badge badge-primary badge-lg mb-5">
//               Essential Oil Traceability Platform
//             </div>

//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15]">
//               Track Every
//               <span className="text-primary"> Batch</span>
//               <br />
//               With Confidence
//             </h1>

//             <p className="mt-6 text-base lg:text-lg opacity-80 leading-7">
//               AromaTrace helps essential oil businesses manage inventory,
//               monitor dispatches, generate certificates and maintain
//               complete traceability from production to delivery.
//             </p>

//             <div className="mt-8 flex gap-4 flex-wrap">

//               <Link
//                 to="/login"
//                className="btn btn-primary px-8"
//               >
//                 Get Started
//               </Link>

//               <Link
//                 to="/login"
//                 className="btn btn-outline btn-primary px-8"
//               >
//                 Login
//               </Link>

//             </div>

//             <div className="stats shadow mt-10 w-full">

//               <div className="stat">
//                 <div className="stat-value text-primary">
//                   1000+
//                 </div>
//                 <div className="stat-desc">
//                   Batches Tracked
//                 </div>
//               </div>

//               <div className="stat">
//                 <div className="stat-value text-success">
//                   500+
//                 </div>
//                 <div className="stat-desc">
//                   Dispatch Records
//                 </div>
//               </div>

//               <div className="stat">
//                 <div className="stat-value text-warning">
//                   99%
//                 </div>
//                 <div className="stat-desc">
//                   Accuracy
//                 </div>
//               </div>

//             </div>

//           </div>

//           {/* RIGHT SIDE */}

//           <div>

//             <div className="bg-primary text-primary-content rounded-3xl p-8 lg:p-10 shadow-2xl max-w-xl mx-auto">

//               <h2 className="text-2xl lg:text-3xl font-bold mb-6">
//                 Why AromaTrace?
//               </h2>

//               <div className="space-y-5">

//                 <div className="flex gap-4 items-start">
//                   <ShieldCheckIcon className="w-9 h-9 shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-lg">
//                       Complete Traceability
//                     </h3>
//                     <p className="text-sm opacity-90">
//                       Track every batch from origin to customer.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 items-start">
//                   <CubeTransparentIcon className="w-9 h-9 shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-lg">
//                       Batch Management
//                     </h3>
//                     <p className="text-sm opacity-90">
//                       Organize and monitor production batches.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 items-start">
//                   <DocumentTextIcon className="w-9 h-9 shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-lg">
//                       Certificate Generation
//                     </h3>
//                     <p className="text-sm opacity-90">
//                       Generate downloadable reports and certificates.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 items-start">
//                   <TruckIcon className="w-9 h-9 shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-lg">
//                       Dispatch Tracking
//                     </h3>
//                     <p className="text-sm opacity-90">
//                       Monitor movement of products in real time.
//                     </p>
//                   </div>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* FEATURES */}

//       <section
//         id="features"
//         className="px-6 lg:px-20 py-16 bg-base-200 scroll-mt-20"
//       >

//         <div className="text-center mb-10">

//           <h2 className="text-3xl lg:text-4xl font-bold">
//             Powerful Features
//           </h2>

//           <p className="mt-3 opacity-70">
//             Everything needed to manage and trace essential oil operations.
//           </p>

//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//           <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//             <div className="card-body">
//               <CubeTransparentIcon className="w-12 h-12 text-primary" />
//               <h3 className="card-title">
//                 Batch Management
//               </h3>
//               <p>
//                 Create and manage production batches efficiently.
//               </p>
//             </div>
//           </div>

//           <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//             <div className="card-body">
//               <TruckIcon className="w-12 h-12 text-primary" />
//               <h3 className="card-title">
//                 Dispatch Monitoring
//               </h3>
//               <p>
//                 Monitor dispatch records and product movement.
//               </p>
//             </div>
//           </div>

//           <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//             <div className="card-body">
//               <DocumentTextIcon className="w-12 h-12 text-primary" />
//               <h3 className="card-title">
//                 PDF Certificates
//               </h3>
//               <p>
//                 Generate certificates and traceability reports.
//               </p>
//             </div>
//           </div>

//           <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//             <div className="card-body">
//               <ChartBarIcon className="w-12 h-12 text-primary" />
//               <h3 className="card-title">
//                 Analytics
//               </h3>
//               <p>
//                 View inventory and dispatch insights.
//               </p>
//             </div>
//           </div>

//           <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//             <div className="card-body">
//               <CloudIcon className="w-12 h-12 text-primary" />
//               <h3 className="card-title">
//                 Cloud Storage
//               </h3>
//               <p>
//                 Secure MongoDB Atlas cloud storage.
//               </p>
//             </div>
//           </div>

//           <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
//             <div className="card-body">
//               <ShieldCheckIcon className="w-12 h-12 text-primary" />
//               <h3 className="card-title">
//                 Secure Access
//               </h3>
//               <p>
//                 JWT authentication and protected routes.
//               </p>
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* WORKFLOW */}

//       <section
//         id="workflow"
//         className="py-16 px-6 lg:px-20 max-w-7xl mx-auto scroll-mt-20"
//       >

//         <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
//           How AromaTrace Works
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           <div className="card bg-base-200 shadow text-center">
//             <div className="card-body items-center">
//               <div className="text-4xl mb-2">✅</div>
//               <h3 className="font-semibold">Batch Creation</h3>
//             </div>
//           </div>

//           <div className="card bg-base-200 shadow text-center">
//             <div className="card-body items-center">
//               <div className="text-4xl mb-2">📦</div>
//               <h3 className="font-semibold">Inventory Entry</h3>
//             </div>
//           </div>

//           <div className="card bg-base-200 shadow text-center">
//             <div className="card-body items-center">
//               <div className="text-4xl mb-2">🚚</div>
//               <h3 className="font-semibold">Dispatch Tracking</h3>
//             </div>
//           </div>

//           <div className="card bg-base-200 shadow text-center">
//             <div className="card-body items-center">
//               <div className="text-4xl mb-2">📄</div>
//               <h3 className="font-semibold">Certificate Generation</h3>
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* STATISTICS */}

//       <section
//         id="stats"
//         className="py-16 bg-base-200 scroll-mt-20"
//       >

//         <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
//           Statistics
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20 max-w-7xl mx-auto">

//           <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
//             <div className="stat-value text-primary">
//               1000+
//             </div>
//             <div className="stat-title">
//               Tracked Batches
//             </div>
//           </div>

//           <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
//             <div className="stat-value text-success">
//               500+
//             </div>
//             <div className="stat-title">
//               Sales Records
//             </div>
//           </div>

//           <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
//             <div className="stat-value text-warning">
//               99%
//             </div>
//             <div className="stat-title">
//               Accuracy
//             </div>
//           </div>

//           <div className="stat bg-base-100 rounded-xl shadow p-6 text-center place-items-center">
//             <div className="stat-value text-secondary">
//               24/7
//             </div>
//             <div className="stat-title">
//               Cloud Availability
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* FOOTER */}

//       <footer className="footer footer-center p-8 bg-base-300">

//         <div>

//           <h2 className="text-2xl font-bold">
//             AromaTrace
//           </h2>

//           <p>
//             Essential Oil Traceability &
//             Inventory Management Platform
//           </p>

//           <p>
//             © 2026 AromaTrace
//             All Rights Reserved
//           </p>

//         </div>

//       </footer>

//     </div>
//   );
// };

// export default Landing;

