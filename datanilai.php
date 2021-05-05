<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta content="Admin Dashboard" name="description" />
    <meta content="ThemeDesign" name="author" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="shortcut icon" href="assets/images/tel-u.png">

    <!--Morris Chart CSS -->
    <link rel="stylesheet" href="assets/plugins/morris/morris.css">

    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="assets/css/icons.css" rel="stylesheet" type="text/css">
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">

</head>

<body class="fixed-left">

    <!-- Begin page -->
    <div id="wrapper">

        <!-- Top Bar Start -->
        <div class="topbar">
            <!-- LOGO -->
            <div class="topbar-left">
                <div class="text-center">
                    <a href="index.html" class="logo-sm"><img src="assets/images/tel-u.png" alt="" height="28"></a>
                </div>
            </div>
            <!-- Button mobile view to collapse sidebar menu -->

            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="list-inline menu-left mb-0">
                        <li class="float-left">
                            <button class="button-menu-mobile open-left waves-light waves-effect">
                                <i class="mdi mdi-menu"></i>
                            </button>
                        </li>
                        
                    </ul>

                    
                            <ul class="dropdown-menu dropdown-menu-lg">
                                <li class="list-group">
                                            </a>
                                            <!-- item-->
                                          
                                            <!-- item-->
                                            
                                            
                                            
        
                                    <!-- last list item -->
                                    
                                </li>
                            </ul>
                        </li>
                      
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                                <img src="assets/images/pp.jpg" alt="user-img" class="rounded-circle">
                                <span class="profile-username">
                                Mazidatil Rohmawati<span class="mdi mdi-chevron-down font-15"></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu">
                                
                               <a href="index.php" class="dropdown-item"> Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- Top Bar End -->

        <!-- ========== Left Sidebar Start ========== -->

        <div class="left side-menu">
            <div class="sidebar-inner slimscrollleft">

                <div class="user-details">
                    <div class="text-center">
                        <img src="assets/images/pp.jpg" alt="" class="rounded-circle img-thumbnail">
                    </div>
                    <div class="user-info">
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Mazidatil Rohmawati</a>
                           
                        </div>

                        <p class="text-muted m-0"><i class="far fa-dot-circle text-primary"></i> Online</p>
                    </div>
                </div>
                <!--- Divider -->

                <div id="sidebar-menu">
                    <ul>
                       

                        <li>
                            <a href="dashboard.php" class="waves-effect"><i class="ti-home"></i><span> Dashboard </span></span></a>
                        </li>

                        <li>
                            <a href="datanilai.php" class="waves-effect"></i><span> Data Nilai </span></a>
                        </li>

                        


                       


                                
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
            <!-- end sidebarinner -->
        </div>
        <!-- Left Sidebar End -->

        <!-- Start right Content here -->

        <div class="content-page">
            <!-- Start content -->
            <div class="content">

                <div class="">
                    <div class="page-header-title">
                        <h4 class="page-title">Dashboard</h4>
                    </div>
                </div>

                <div class="page-content-wrapper ">

                    <div class="container-fluid">

                    <!-- ini tempat nanti data  -->

                    <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            
                                        
                                        <section class="content">
    <div class="container">
        <div class="block-header">
            <div class="row clearfix">
                <div class="col-lg-5 col-md-5 col-sm-12">
                </div>            
                
            </div>
        </div>
       
                    <div class="body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                <thead>
                                    <tr>
                                        <th>Semester</th>
                                        <th>IP</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                </thead>                                
                                <?php 
		include 'koneksi.php';
	
		$data = mysqli_query($koneksi,"select * from ip");
		while($d = mysqli_fetch_array($data)){
			?>
			<tr>
			
				<td><?php echo $d['semester']; ?></td>
				<td><?php echo $d['ip']; ?></td>
				
				<td>
					<a href="edit.php?semester=<?php echo $d['semester']; ?>">EDIT</a>
					<a href="hapus.php?semester=<?php echo $d['semester']; ?>">HAPUS</a>
				</td>
			</tr>
			<?php 
		}
		?>

        <a href="tambah.php" button type="button" class="btn btn-primary">Tambah Data</button> </a>



                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</section>
                                    
                                        

                                           
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End of Row -->

                    <!-- AKHIR NYA  -->
                       
                         
                      
                         
                    </div>
                    <!-- end row -->

             </div><!-- container-fluid -->

            </div><!-- container-fluid -->

        </div> <!-- Page content Wrapper -->

        </div>
        <!-- content -->

        <footer class="footer">
            © 2019 - 2020 Hexzy <span class="d-none d-md-inline-block"> - Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesdesign.</span>
        </footer>

    </div>
    <!-- End Right content here -->

    </div>
    <!-- END wrapper -->

    <!-- jQuery  -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/modernizr.min.js"></script>
    <script src="assets/js/detect.js"></script>
    <script src="assets/js/fastclick.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    <script src="assets/js/jquery.blockUI.js"></script>
    <script src="assets/js/waves.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/jquery.nicescroll.js"></script>
    <script src="assets/js/jquery.scrollTo.min.js"></script>

    <!--Morris Chart-->
    <script src="assets/plugins/morris/morris.min.js"></script>
    <script src="assets/plugins/raphael/raphael.min.js"></script>

    <!-- KNOB JS -->
    <script src="assets/plugins/jquery-knob/excanvas.js"></script>
    <script src="assets/plugins/jquery-knob/jquery.knob.js"></script>

    <script src="assets/plugins/flot-chart/jquery.flot.min.js"></script>
    <script src="assets/plugins/flot-chart/jquery.flot.tooltip.min.js"></script>
    <script src="assets/plugins/flot-chart/jquery.flot.resize.js"></script>
    <script src="assets/plugins/flot-chart/jquery.flot.pie.js"></script>
    <script src="assets/plugins/flot-chart/jquery.flot.selection.js"></script>
    <script src="assets/plugins/flot-chart/jquery.flot.stack.js"></script>
    <script src="assets/plugins/flot-chart/jquery.flot.crosshair.js"></script>

    <script src="assets/pages/dashboard.js"></script>

    <script src="assets/js/app.js"></script>

</body>

</html>