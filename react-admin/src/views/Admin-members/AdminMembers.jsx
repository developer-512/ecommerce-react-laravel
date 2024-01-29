import React from 'react';
import {Link} from "react-router-dom";

const AdminMembers = (prop) => {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12">


                    <div className="header">
                        <div className="header-body">
                            <div className="row align-items-center">
                                <div className="col">

                                    <h6 className="header-pretitle">
                                        Overview
                                    </h6>


                                    <h1 className="header-title text-truncate">
                                        Admin Members
                                    </h1>

                                </div>
                                <div className="col-auto">

                                    <div className="nav btn-group d-inline-flex" role="tablist">
                                        <button className="btn btn-white active" id="contactsListTab" data-bs-toggle="tab" data-bs-target="#contactsListPane" role="tab" aria-controls="contactsListPane" aria-selected="true">
                                            <span className="fe fe-list"></span>
                                        </button>
                                        <button className="btn btn-white" id="contactsCardsTab" data-bs-toggle="tab" data-bs-target="#contactsCardsPane" role="tab" aria-controls="contactsCardsPane" aria-selected="false">
                                            <span className="fe fe-grid"></span>
                                        </button>
                                    </div>


                                    <Link to={prop.routes} className="btn btn-primary ms-2">
                                        Add Admin
                                    </Link>

                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col">

                                    <ul className="nav nav-tabs nav-overflow header-tabs">
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link text-nowrap active">
                                                All contacts <span className="badge rounded-pill bg-secondary-soft">823</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link text-nowrap">
                                                Your contacts <span className="badge rounded-pill bg-secondary-soft">231</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#!" className="nav-link text-nowrap">
                                                Deleted <span className="badge rounded-pill bg-secondary-soft">22</span>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="contactsListPane" role="tabpanel" aria-labelledby="contactsListTab">


                            <div className="card" data-list="{&quot;valueNames&quot;: [&quot;item-name&quot;, &quot;item-title&quot;, &quot;item-email&quot;, &quot;item-phone&quot;, &quot;item-score&quot;, &quot;item-company&quot;], &quot;page&quot;: 10, &quot;pagination&quot;: {&quot;paginationClass&quot;: &quot;list-pagination&quot;}}" id="contactsList">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">


                                            <form>
                                                <div className="input-group input-group-flush input-group-merge input-group-reverse">
                                                    <input className="form-control list-search" type="search" placeholder="Search"/>
                                                    <span className="input-group-text">
                              <i className="fe fe-search"></i>
                            </span>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-auto me-n3">


                                            <form>
                                                <div className="choices" data-type="select-one" tabIndex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="form-select form-select-sm form-control-flush"><select className="form-select form-select-sm form-control-flush form-control" data-choices="{&quot;searchEnabled&quot;: false}" hidden="" tabIndex="-1" data-choice="active"><option value="10 per page">10 per page</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="10 per page" data-custom-properties="null" aria-selected="true">10 per page</div></div></div><div className="choices__list dropdown-menu" aria-expanded="false"><div className="choices__list" role="listbox"><div className="choices__item dropdown-item choices__item--selectable is-highlighted" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="1" data-value="5 per page" role="option" aria-selected="true">
                                                    5 per page
                                                </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="2" data-value="10 per page" role="option">
                                                    10 per page
                                                </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="3" data-value="All" role="option">
                                                    All
                                                </div></div></div></div>
                                            </form>

                                        </div>
                                        <div className="col-auto">


                                            <div className="dropdown">


                                                <button className="btn btn-sm btn-white" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe fe-sliders me-1"></i> Filter <span className="badge bg-primary ms-1 d-none">0</span>
                                                </button>


                                                <form className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                                                    <div className="card-header">


                                                        <h4 className="card-header-title">
                                                            Filters
                                                        </h4>


                                                        <button className="btn btn-sm btn-link text-reset d-none" type="reset">
                                                            <small>Clear filters</small>
                                                        </button>

                                                    </div>
                                                    <div className="card-body">


                                                        <div className="list-group list-group-flush mt-n4 mb-4">
                                                            <div className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col">


                                                                        <small>Title</small>

                                                                    </div>
                                                                    <div className="col-auto">


                                                                        <div className="choices" data-type="select-one" tabIndex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="form-select form-select-sm"><select className="form-select form-select-sm form-control" name="item-title" data-choices="{&quot;searchEnabled&quot;: false}" hidden="" tabIndex="-1" data-choice="active"><option value="*">Any</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="*" data-custom-properties="null" aria-selected="true">Any</div></div></div><div className="choices__list dropdown-menu" aria-expanded="false"><div className="choices__list" role="listbox"><div className="choices__item dropdown-item choices__item--selectable is-highlighted" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="1" data-value="*" role="option" aria-selected="true">
                                                                            Any
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="2" data-value="Designer" role="option">
                                                                            Designer
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="3" data-value="Developer" role="option">
                                                                            Developer
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="4" data-value="Owner" role="option">
                                                                            Owner
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="5" data-value="Founder" role="option">
                                                                            Founder
                                                                        </div></div></div></div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="list-group-item">
                                                                <div className="row">
                                                                    <div className="col">


                                                                        <small>Lead scrore</small>

                                                                    </div>
                                                                    <div className="col-auto">


                                                                        <div className="choices" data-type="select-one" tabIndex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="form-select form-select-sm"><select className="form-select form-select-sm form-control" name="item-score" data-choices="{&quot;searchEnabled&quot;: false}" hidden="" tabIndex="-1" data-choice="active"><option value="*">Any</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="*" data-custom-properties="null" aria-selected="true">Any</div></div></div><div className="choices__list dropdown-menu" aria-expanded="false"><div className="choices__list" role="listbox"><div className="choices__item dropdown-item choices__item--selectable is-highlighted" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="1" data-value="*" role="option" aria-selected="true">
                                                                            Any
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="2" data-value="1/10" role="option">
                                                                            1+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="3" data-value="2/10" role="option">
                                                                            2+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="4" data-value="3/10" role="option">
                                                                            3+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="5" data-value="4/10" role="option">
                                                                            4+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="6" data-value="5/10" role="option">
                                                                            5+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="7" data-value="6/10" role="option">
                                                                            6+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="8" data-value="7/10" role="option">
                                                                            7+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="9" data-value="8/10" role="option">
                                                                            8+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="10" data-value="9/10" role="option">
                                                                            9+
                                                                        </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="11" data-value="10/10" role="option">
                                                                            10
                                                                        </div></div></div></div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <button className="btn w-100 btn-primary" type="submit">
                                                            Apply filter
                                                        </button>

                                                    </div>
                                                </form>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-sm table-hover table-nowrap card-table">
                                        <thead>
                                        <tr>
                                            <th>


                                                <div className="form-check mb-n2">
                                                    <input className="form-check-input list-checkbox-all" id="listCheckboxAll" type="checkbox"/>
                                                    <label className="form-check-label" htmlFor="listCheckboxAll"></label>
                                                </div>

                                            </th>
                                            <th>
                                                <a className="list-sort text-muted" data-sort="item-name" href="#">Name</a>
                                            </th>
                                            <th>
                                                <a className="list-sort text-muted" data-sort="item-title" href="#">Job title</a>
                                            </th>
                                            <th>
                                                <a className="list-sort text-muted" data-sort="item-email" href="#">Email</a>
                                            </th>
                                            <th>
                                                <a className="list-sort text-muted" data-sort="item-phone" href="#">Phone</a>
                                            </th>
                                            <th>
                                                <a className="list-sort text-muted" data-sort="item-score" href="#">Lead score</a>
                                            </th>
                                            <th colSpan="2">
                                                <a className="list-sort text-muted" data-sort="item-company" href="#">Company</a>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="list fs-base"><tr>
                                            <td>


                                                <div className="form-check">
                                                    <input className="form-check-input list-checkbox" id="listCheckboxOne" type="checkbox"/>
                                                    <label className="form-check-label" htmlFor="listCheckboxOne"></label>
                                                </div>

                                            </td>
                                            <td>


                                                <div className="avatar avatar-xs align-middle me-2">
                                                    <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-1.jpg" alt="..."/>
                                                </div> <a className="item-name text-reset" href="profile-posts.html">Dianna Smiley</a>

                                            </td>
                                            <td>


                                                <span className="item-title">Designer</span>

                                            </td>
                                            <td>

                                                <a className="item-email text-reset" href="mailto:john.doe@company.com">diana.smiley@company.com</a>

                                            </td>
                                            <td>

                                                <a className="item-phone text-reset" href="tel:1-123-456-4890">(988) 568-3568</a>

                                            </td>
                                            <td>


                                                <span className="item-score badge bg-danger-soft">1/10</span>

                                            </td>
                                            <td>


                                                <a className="item-company text-reset" href="team-overview.html">Twitter</a>

                                            </td>
                                            <td className="text-end">


                                                <div className="dropdown">
                                                    <a className="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                <div className="card-footer d-flex justify-content-between">

                                    <ul className="list-pagination-prev pagination pagination-tabs card-pagination">
                                        <li className="page-item">
                                            <a className="page-link ps-0 pe-4 border-end" href="#">
                                                <i className="fe fe-arrow-left me-1"></i> Prev
                                            </a>
                                        </li>
                                    </ul>

                                    <ul className="list-pagination pagination pagination-tabs card-pagination"><li className="active"><a className="page" href="#" data-i="1" data-page="10">1</a></li><li><a className="page" href="#" data-i="2" data-page="10">2</a></li><li><a className="page" href="#" data-i="3" data-page="10">3</a></li></ul>

                                    <ul className="list-pagination-next pagination pagination-tabs card-pagination">
                                        <li className="page-item">
                                            <a className="page-link ps-4 pe-0 border-start" href="#">
                                                Next <i className="fe fe-arrow-right ms-1"></i>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="list-alert alert alert-dark alert-dismissible border fade" role="alert">

                                        <div className="row align-items-center">
                                            <div className="col">


                                                <div className="form-check">
                                                    <input className="form-check-input" id="listAlertCheckbox" type="checkbox" checked="" disabled=""/>
                                                    <label className="form-check-label text-white" htmlFor="listAlertCheckbox">
                                                        <span className="list-alert-count">0</span> deal(s)
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="col-auto me-n3">


                                                <button className="btn btn-sm btn-white-20">
                                                    Edit
                                                </button>


                                                <button className="btn btn-sm btn-white-20">
                                                    Delete
                                                </button>

                                            </div>
                                        </div>

                                        <button type="button" className="list-alert-close btn-close" aria-label="Close"></button>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="contactsCardsPane" role="tabpanel" aria-labelledby="contactsCardsTab">

                            <div data-list="{&quot;valueNames&quot;: [&quot;item-name&quot;, &quot;item-title&quot;, &quot;item-email&quot;, &quot;item-phone&quot;, &quot;item-score&quot;, &quot;item-company&quot;], &quot;page&quot;: 9, &quot;pagination&quot;: {&quot;paginationClass&quot;: &quot;list-pagination&quot;}}" id="contactsCards">


                                <div className="row align-items-center mb-4">
                                    <div className="col">


                                        <form>
                                            <div className="input-group input-group-lg input-group-merge input-group-reverse">
                                                <input className="form-control list-search" type="search" placeholder="Search"/>
                                                <span className="input-group-text">
                            <i className="fe fe-search"></i>
                          </span>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="col-auto me-n3">

                                        <form>
                                            <div className="choices" data-type="select-one" tabIndex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="form-select form-select-sm form-control-flush"><select className="form-select form-select-sm form-control-flush form-control" data-choices="{&quot;searchEnabled&quot;: false}" hidden="" tabIndex="-1" data-choice="active"><option value="9 per page">9 per page</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="9 per page" data-custom-properties="null" aria-selected="true">9 per page</div></div></div><div className="choices__list dropdown-menu" aria-expanded="false"><div className="choices__list" role="listbox"><div className="choices__item dropdown-item choices__item--selectable is-highlighted" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="1" data-value="9 per page" role="option" aria-selected="true">
                                                9 per page
                                            </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="2" data-value="All" role="option">
                                                All
                                            </div></div></div></div>
                                        </form>

                                    </div>
                                    <div className="col-auto">


                                        <div className="dropdown">


                                            <button className="btn btn-sm btn-white" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe fe-sliders me-1"></i> Filter <span className="badge bg-primary ms-1 d-none">0</span>
                                            </button>


                                            <form className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                                                <div className="card-header">


                                                    <h4 className="card-header-title">
                                                        Filters
                                                    </h4>


                                                    <button className="btn btn-sm btn-link text-reset d-none" type="reset">
                                                        <small>Clear filters</small>
                                                    </button>

                                                </div>
                                                <div className="card-body">


                                                    <div className="list-group list-group-flush mt-n4 mb-4">
                                                        <div className="list-group-item">
                                                            <div className="row">
                                                                <div className="col">


                                                                    <small>Title</small>

                                                                </div>
                                                                <div className="col-auto">


                                                                    <div className="choices" data-type="select-one" tabIndex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="form-select form-select-sm"><select className="form-select form-select-sm form-control" name="item-title" data-choices="{&quot;searchEnabled&quot;: false}" hidden="" tabIndex="-1" data-choice="active"><option value="*">Any</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="*" data-custom-properties="null" aria-selected="true">Any</div></div></div><div className="choices__list dropdown-menu" aria-expanded="false"><div className="choices__list" role="listbox"><div className="choices__item dropdown-item choices__item--selectable is-highlighted" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="1" data-value="*" role="option" aria-selected="true">
                                                                        Any
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="2" data-value="Designer" role="option">
                                                                        Designer
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="3" data-value="Developer" role="option">
                                                                        Developer
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="4" data-value="Owner" role="option">
                                                                        Owner
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="5" data-value="Founder" role="option">
                                                                        Founder
                                                                    </div></div></div></div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <div className="row">
                                                                <div className="col">


                                                                    <small>Lead scrore</small>

                                                                </div>
                                                                <div className="col-auto">


                                                                    <div className="choices" data-type="select-one" tabIndex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="form-select form-select-sm"><select className="form-select form-select-sm form-control" name="item-score" data-choices="{&quot;searchEnabled&quot;: false}" hidden="" tabIndex="-1" data-choice="active"><option value="*">Any</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="*" data-custom-properties="null" aria-selected="true">Any</div></div></div><div className="choices__list dropdown-menu" aria-expanded="false"><div className="choices__list" role="listbox"><div className="choices__item dropdown-item choices__item--selectable is-highlighted" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="1" data-value="*" role="option" aria-selected="true">
                                                                        Any
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="2" data-value="1/10" role="option">
                                                                        1+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="3" data-value="2/10" role="option">
                                                                        2+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="4" data-value="3/10" role="option">
                                                                        3+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="5" data-value="4/10" role="option">
                                                                        4+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="6" data-value="5/10" role="option">
                                                                        5+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="7" data-value="6/10" role="option">
                                                                        6+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="8" data-value="7/10" role="option">
                                                                        7+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="9" data-value="8/10" role="option">
                                                                        8+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="10" data-value="9/10" role="option">
                                                                        9+
                                                                    </div><div className="choices__item dropdown-item choices__item--selectable" data-select-text="Press to select" data-choice="" data-choice-selectable="" data-id="11" data-value="10/10" role="option">
                                                                        10
                                                                    </div></div></div></div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <button className="btn w-100 btn-primary" type="submit">
                                                        Apply filter
                                                    </button>

                                                </div>
                                            </form>

                                        </div>

                                    </div>
                                </div>


                                <div className="list row">
                                    <div className="col-12 col-md-6 col-xl-4">


                                    <div className="card">
                                        <div className="card-body">


                                            <div className="row align-items-center">
                                                <div className="col">


                                                    <div className="form-check form-check-circle">
                                                        <input className="form-check-input list-checkbox" type="checkbox" id="cardsCheckboxOne"/>
                                                        <label className="form-check-label" htmlFor="cardsCheckboxOne"></label>
                                                    </div>

                                                </div>
                                                <div className="col-auto">


                                                    <div className="dropdown">
                                                        <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                                                </div>
                                            </div>


                                            <a href="profile-posts.html" className="avatar avatar-xl card-avatar">
                                                <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
                                            </a>


                                            <div className="text-center mb-5">


                                                <h2 className="card-title">
                                                    <a className="item-name" href="profile-posts.html">Dianna Smiley</a>
                                                </h2>


                                                <p className="small text-muted mb-3">
                                                    <span className="item-title">Designer</span> at <span className="item-company">Twitter</span>
                                                </p>


                                                <a className="btn btn-sm btn-white" href="tel:1-123-456-7890">
                                                    <i className="fe fe-phone me-1"></i> Call
                                                </a>
                                                <a className="btn btn-sm btn-white" href="mailto:john.doe@company.com">
                                                    <i className="fe fe-mail me-1"></i> Email
                                                </a>

                                            </div>


                                            <hr className="card-divider mb-0"/>


                                            <div className="list-group list-group-flush mb-n3">
                                                <div className="list-group-item">
                                                    <div className="row">
                                                        <div className="col">


                                                            <small>Company</small>

                                                        </div>
                                                        <div className="col-auto">


                                                            <small>Twitter</small>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item">
                                                    <div className="row">
                                                        <div className="col">


                                                            <small>Lead Score</small>

                                                        </div>
                                                        <div className="col-auto">


                                                            <span className="item-score badge bg-danger-soft">1/10</span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                </div>


                                <div className="row g-0">


                                    <ul className="col list-pagination-prev pagination pagination-tabs justify-content-start">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fe fe-arrow-left me-1"></i> Prev
                                            </a>
                                        </li>
                                    </ul>


                                    <ul className="col list-pagination pagination pagination-tabs justify-content-center"><li className="active"><a className="page" href="#" data-i="1" data-page="9">1</a></li><li><a className="page" href="#" data-i="2" data-page="9">2</a></li></ul>


                                    <ul className="col list-pagination-next pagination pagination-tabs justify-content-end">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next <i className="fe fe-arrow-right ms-1"></i>
                                            </a>
                                        </li>
                                    </ul>

                                </div>


                                <div className="list-alert alert alert-dark alert-dismissible border fade" role="alert">


                                    <div className="row align-items-center">
                                        <div className="col">


                                            <div className="form-check">
                                                <input className="form-check-input" id="cardAlertCheckbox" type="checkbox" checked="" disabled=""/>
                                                <label className="form-check-label text-white" for="cardAlertCheckbox">
                                                    <span className="list-alert-count">0</span> deal(s)
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-auto me-n3">


                                            <button className="btn btn-sm btn-white-20">
                                                Edit
                                            </button>


                                            <button className="btn btn-sm btn-white-20">
                                                Delete
                                            </button>

                                        </div>
                                    </div>

                                    <button type="button" className="list-alert-close btn-close" aria-label="Close">

                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminMembers;
