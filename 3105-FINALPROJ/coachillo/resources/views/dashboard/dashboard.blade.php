@extends('layouts.admin-layout')

@section('sidebar')
    @include('partials.sidebar')
@endsection

@section('content')
<div id="layoutSidenav_content">
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-primary text-white mb-4">
                        <div class="card-body">Number of Clients</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-warning text-white mb-4">
                        <div class="card-body">Highest Volume Points: Michael Scott</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-success text-white mb-4">
                        <div class="card-body"> Total Volume Points </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">View Details</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-area me-1"></i>
                            Monthly Volume Points
                        </div>
                        <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-bar me-1"></i>
                            Total Clients
                        </div>
                        <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
            </div>
            <br>
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    Product Page
                </div>
                <div class="card-body">
                    <table id="datatablesSimple">
                        <thead>
                            <tr>
                                <th>ID</th>

                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Volume Points</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>ID</th>

                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Volume Points</th>

                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>P0001</td>

                                <td>Herbal Tea Concentrate</td>
                                <td>500.00</td>

                                <td>10</td>
                            </tr>

                            <tr>
                                <td>P0002</td>

                                <td>Herbal Aloe Concentrate</td>

                                <td>1000.00</td>
                                <td>20</td>
                            </tr>

                            <tr>
                                <td>P0003</td>

                                <td>Herbal Tea Concentrate</td>
                                <td>1500.00</td>

                                <td>25</td>
                            </tr>

                            <tr>
                                <td>P0004</td>

                                <td>Mineral Herbal Complex</td>
                                <td>2500.00</td>

                                <td>20</td>
                            </tr>

                            <tr>
                                <td>P0005</td>

                                <td>Personalized Protien Powder</td>
                                <td>2000.00</td>

                                <td>20</td>
                            </tr>

                            <tr>
                                <td>P0006</td>

                                <td>Formula One Shake Cannister</td>
                                <td>500.00</td>

                                <td>15</td>
                            </tr>

                            <tr>
                                <td>P0007</td>

                                <td>Formula 2 Vitamins and Minerals</td>
                                <td>1200.00</td>

                                <td>30</td>
                            </tr>

                            <tr>
                                <td>P0008</td>

                                <td>Soothing Aloe Facial Cleanser</td>
                                <td>750.00</td>

                                <td>320,800</td>
                            </tr>

                            <tr>
                                <td>P0009</td>

                                <td>Hydrating Eye Cream</td>
                                <td>1050.00</td>

                                <td>20</td>
                            </tr>

                            <tr>
                                <td>P0010</td>

                                <td>Mint Clay Mask</td>
                                <td>150.00</td>

                                <td>15</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>

    <script src="{{ asset('js/scripts.js') }}"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>

    <script src="{{ asset('js/demo/chart-area-demo.js') }}"></script>
    <script src="{{ asset('js/demo/chart-bar-demo.js') }}"></script>

    <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>

    <script src="{{ asset('js/datatables-simple-demo.js') }}"></script>
@endsection

