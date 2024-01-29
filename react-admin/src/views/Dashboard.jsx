import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="header bg-dark pb-5">
                <div className="container-fluid">

                    <div className="header-body">
                        <div className="row align-items-end">
                            <div className="col">

                                <h6 className="header-pretitle text-secondary">
                                    Annual
                                </h6>

                                <h1 className="header-title text-white">
                                    Audience
                                </h1>

                            </div>
                            <div className="col-auto">

                                <ul className="nav nav-tabs header-tabs">
                                    <li className="nav-item" data-toggle="chart" data-target="#audienceChart"
                                        data-trigger="click" data-action="toggle" data-dataset="0">
                                        <a href="#" className="nav-link text-center active" data-bs-toggle="tab">
                                            <h6 className="header-pretitle text-secondary">
                                                Customers
                                            </h6>
                                            <h3 className="text-white mb-0">
                                                73.2k
                                            </h3>
                                        </a>
                                    </li>
                                    <li className="nav-item" data-toggle="chart" data-target="#audienceChart"
                                        data-trigger="click" data-action="toggle" data-dataset="1">
                                        <a href="#" className="nav-link text-center" data-bs-toggle="tab">
                                            <h6 className="header-pretitle text-secondary">
                                                Sessions
                                            </h6>
                                            <h3 className="text-white mb-0">
                                                92.1k
                                            </h3>
                                        </a>
                                    </li>
                                    <li className="nav-item" data-toggle="chart" data-target="#audienceChart"
                                        data-trigger="click" data-action="toggle" data-dataset="2">
                                        <a href="#" className="nav-link text-center" data-bs-toggle="tab">
                                            <h6 className="header-pretitle text-secondary">
                                                Conversion
                                            </h6>
                                            <h3 className="text-white mb-0">
                                                50.2%
                                            </h3>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="header-footer">

                        <div className="chart">
                            <canvas id="audienceChart" className="chart-canvas"></canvas>
                        </div>

                    </div>

                </div>
            </div>

            <div className="container-fluid mt-n6">
                <div className="row">
                    <div className="col-12 col-xl-8">

                        <div className="card">
                            <div className="card-header">

                                <h4 className="card-header-title">
                                    Orders
                                </h4>

                                <span className="text-muted me-3">
                  Show affiliate:
                </span>

                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="cardToggle"
                                           data-toggle="chart" data-target="#ordersChart" data-trigger="change"
                                           data-action="add" data-dataset="1"/>
                                    <label className="form-check-label" htmlFor="cardToggle"></label>
                                </div>

                            </div>
                            <div className="card-body">

                                <div className="chart">
                                    <canvas id="ordersChart" className="chart-canvas"></canvas>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">

                        <div className="card">
                            <div className="card-header">

                                <h4 className="card-header-title">
                                    Traffic Channels
                                </h4>

                                <ul className="nav nav-tabs nav-tabs-sm card-header-tabs">
                                    <li className="nav-item" data-toggle="chart" data-target="#trafficChart"
                                        data-trigger="click" data-action="toggle" data-dataset="0">
                                        <a href="#" className="nav-link active" data-bs-toggle="tab">
                                            All
                                        </a>
                                    </li>
                                    <li className="nav-item" data-toggle="chart" data-target="#trafficChart"
                                        data-trigger="click" data-action="toggle" data-dataset="1">
                                        <a href="#" className="nav-link" data-bs-toggle="tab">
                                            Direct
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div className="card-body">

                                <div className="chart chart-appended">
                                    <canvas id="trafficChart" className="chart-canvas" data-toggle="legend"
                                            data-target="#trafficChartLegend"></canvas>
                                </div>

                                <div id="trafficChartLegend" className="chart-legend"></div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl">

                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center gx-0">
                                    <div className="col">

                                        <h6 className="text-uppercase text-muted mb-2">
                                            Weekly Sales
                                        </h6>

                                        <span className="h2 mb-0">
                      $24,500
                    </span>

                                        <span className="badge bg-success-soft mt-n1">
                      +3.5%
                    </span>

                                    </div>
                                    <div className="col-auto">

                                        <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6 col-xl">

                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center gx-0">
                                    <div className="col">

                                        <h6 className="text-uppercase text-muted mb-2">
                                            Orders Placed
                                        </h6>

                                        <span className="h2 mb-0">
                      763.5
                    </span>

                                    </div>
                                    <div className="col-auto">

                                        <span className="h2 fe fe-briefcase text-muted mb-0"></span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6 col-xl">

                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center gx-0">
                                    <div className="col">

                                        <h6 className="text-uppercase text-muted mb-2">
                                            Conversion Rate
                                        </h6>

                                        <div className="row align-items-center g-0">
                                            <div className="col-auto">

                                                <span className="h2 me-2 mb-0">
                          84.5%
                        </span>

                                            </div>
                                            <div className="col">

                                                <div className="progress progress-sm me-4">
                                                    <div className="progress-bar" role="progressbar" style={{width: '85%'}}
                                                         aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">

                                        <span className="h2 fe fe-clipboard text-muted mb-0"></span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-6 col-xl">

                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center gx-0">
                                    <div className="col">

                                        <h6 className="text-uppercase text-muted mb-2">
                                            Avg. Value
                                        </h6>

                                        <span className="h2 mb-0">
                      $85.50
                    </span>

                                    </div>
                                    <div className="col-auto">

                                        <div className="chart chart-sparkline">
                                            <canvas className="chart-canvas" id="sparklineChart"></canvas>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-4">

                        <div className="card-adjust-xl">
                            <div className="card">
                                <div className="card-header">

                                    <h4 className="card-header-title">
                                        Recent Activity
                                    </h4>

                                    <a className="small" href="#!">View all</a>

                                </div>
                                <div className="card-body">

                                    <div className="list-group list-group-flush list-group-activity my-n3">
                                        <div className="list-group-item">
                                            <div className="row">
                                                <div className="col-auto">

                                                    <div className="avatar avatar-sm">
                                                        <img src="./assets/img/avatars/profiles/avatar-1.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>

                                                </div>
                                                <div className="col ms-n2">

                                                    <div className="small">
                                                        <strong>Dianna Smiley</strong> shared your post with Ab Hadley,
                                                        Adolfo
                                                        Hess, and 3 others.
                                                    </div>

                                                    <small className="text-muted">
                                                        2m ago
                                                    </small>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row">
                                                <div className="col-auto">

                                                    <div className="avatar avatar-sm">
                                                        <img src="./assets/img/avatars/profiles/avatar-2.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>

                                                </div>
                                                <div className="col ms-n2">

                                                    <div className="small">
                                                        <strong>Ab Hadley</strong> reacted to your post with a 😍
                                                    </div>

                                                    <small className="text-muted">
                                                        2m ago
                                                    </small>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row">
                                                <div className="col-auto">

                                                    <div className="avatar avatar-sm">
                                                        <img src="./assets/img/avatars/profiles/avatar-3.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>

                                                </div>
                                                <div className="col ms-n2">

                                                    <div className="small">
                                                        <strong>Adolfo Hess</strong> commented
                                                        <blockquote className="mb-0">
                                                            “I don’t think this really makes sense to do without
                                                            approval from
                                                            Johnathan since he’s the one...”
                                                        </blockquote>
                                                    </div>

                                                    <small className="text-muted">
                                                        2m ago
                                                    </small>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row">
                                                <div className="col-auto">

                                                    <div className="avatar avatar-sm">
                                                        <img src="./assets/img/avatars/profiles/avatar-4.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>

                                                </div>
                                                <div className="col ms-n2">

                                                    <div className="small">
                                                        <strong>Daniela Dewitt</strong> subscribed to you.
                                                    </div>

                                                    <small className="text-muted">
                                                        2m ago
                                                    </small>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row">
                                                <div className="col-auto">

                                                    <div className="avatar avatar-sm">
                                                        <img src="./assets/img/avatars/profiles/avatar-5.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>

                                                </div>
                                                <div className="col ms-n2">

                                                    <div className="small">
                                                        <strong>Miyah Myles</strong> shared your post with Ryu Duke,
                                                        Glen Rouse,
                                                        and 3 others.
                                                    </div>

                                                    <small className="text-muted">
                                                        2m ago
                                                    </small>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row">
                                                <div className="col-auto">

                                                    <div className="avatar avatar-sm">
                                                        <img src="./assets/img/avatars/profiles/avatar-6.jpg" alt="..."
                                                             className="avatar-img rounded-circle"/>
                                                    </div>

                                                </div>
                                                <div className="col ms-n2">

                                                    <div className="small">
                                                        <strong>Ryu Duke</strong> reacted to your post with a 😍
                                                    </div>

                                                    <small className="text-muted">
                                                        2m ago
                                                    </small>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-xl-8">

                        <div className="card">
                            <div className="card-header">

                                <h4 className="card-header-title">
                                    Best Selling Products
                                </h4>

                                <a href="#!" className="btn btn-sm btn-white">
                                    Export
                                </a>

                            </div>
                            <div className="table-responsive mb-0"
                                 data-list='{"valueNames": ["products-product", "products-stock", "products-price", "products-sales"]}'
                                 id="productsList">
                                <table className="table table-sm table-nowrap table-hover card-table">
                                    <thead>
                                    <tr>
                                        <th>
                                            <a href="#" className="text-muted list-sort" data-sort="products-product">
                                                Product
                                            </a>
                                        </th>
                                        <th>
                                            <a href="#" className="text-muted list-sort" data-sort="products-stock">
                                                Stock
                                            </a>
                                        </th>
                                        <th>
                                            <a href="#" className="text-muted list-sort" data-sort="products-price">
                                                Price
                                            </a>
                                        </th>
                                        <th colSpan="2">
                                            <a href="#" className="text-muted list-sort" data-sort="products-sales">
                                                Monthly Sales
                                            </a>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="list">
                                    <tr>
                                        <td className="products-product">
                                            <div className="d-flex align-items-center">

                                                <div className="avatar">
                                                    <img className="avatar-img rounded me-3"
                                                         src="assets/img/avatars/products/product-1.jpg" alt="..."/>
                                                </div>

                                                <div className="ms-3">

                                                    <h4 className="fw-normal mb-1">Sketchpad</h4>

                                                    <small className="text-muted">3" x 5" Size</small>

                                                </div>

                                            </div>
                                        </td>
                                        <td className="products-stock">

                                            <span className="badge bg-success-soft">Available</span>

                                        </td>
                                        <td className="products-price">
                                            $14.99
                                        </td>
                                        <td className="products-sales">
                                            $3,145.23
                                        </td>
                                        <td className="text-end">

                                            <div className="dropdown">
                                                <a href="#" className="dropdown-ellipses dropdown-toggle" role="button"
                                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#!" className="dropdown-item">
                                                        Action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Another action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="products-product">
                                            <div className="d-flex align-items-center">

                                                <div className="avatar">
                                                    <img className="avatar-img rounded me-3"
                                                         src="assets/img/avatars/products/product-2.jpg" alt="..."/>
                                                </div>

                                                <div className="ms-3">

                                                    <h4 className="fw-normal mb-1">Turtleshell Shades</h4>

                                                    <small className="text-muted">UV + Blue Light</small>

                                                </div>

                                            </div>
                                        </td>
                                        <td className="products-stock">

                                            <span className="badge bg-warning-soft">Unavailable</span>

                                        </td>
                                        <td className="products-price">
                                            $39.99
                                        </td>
                                        <td className="products-sales">
                                            $2,611.82
                                        </td>
                                        <td className="text-end">

                                            <div className="dropdown">
                                                <a href="#" className="dropdown-ellipses dropdown-toggle" role="button"
                                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#!" className="dropdown-item">
                                                        Action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Another action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="products-product">
                                            <div className="d-flex align-items-center">

                                                <div className="avatar">
                                                    <img className="avatar-img rounded me-3"
                                                         src="assets/img/avatars/products/product-3.jpg" alt="..."/>
                                                </div>

                                                <div className="ms-3">

                                                    <h4 className="fw-normal mb-1">Nike "Go Bag"</h4>

                                                    <small className="text-muted">Leather + Gortex</small>

                                                </div>

                                            </div>
                                        </td>
                                        <td className="products-stock">

                                            <span className="badge bg-success-soft">Available</span>

                                        </td>
                                        <td className="products-price">
                                            $149.99
                                        </td>
                                        <td className="products-sales">
                                            $2,372.19
                                        </td>
                                        <td className="text-end">

                                            <div className="dropdown">
                                                <a href="#" className="dropdown-ellipses dropdown-toggle" role="button"
                                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#!" className="dropdown-item">
                                                        Action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Another action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="products-product">
                                            <div className="d-flex align-items-center">

                                                <div className="avatar">
                                                    <img className="avatar-img rounded me-3"
                                                         src="assets/img/avatars/products/product-4.jpg" alt="..."/>
                                                </div>

                                                <div className="ms-3">

                                                    <h4 className="fw-normal mb-1">Swell Bottle</h4>

                                                    <small className="text-muted">Bone Clay White</small>

                                                </div>

                                            </div>
                                        </td>
                                        <td className="products-stock">

                                            <span className="badge bg-success-soft">Available</span>

                                        </td>
                                        <td className="products-price">
                                            $24.99
                                        </td>
                                        <td className="products-sales">
                                            $1,145.23
                                        </td>
                                        <td className="text-end">

                                            <div className="dropdown">
                                                <a href="#" className="dropdown-ellipses dropdown-toggle" role="button"
                                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="#!" className="dropdown-item">
                                                        Action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Another action
                                                    </a>
                                                    <a href="#!" className="dropdown-item">
                                                        Something else here
                                                    </a>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
