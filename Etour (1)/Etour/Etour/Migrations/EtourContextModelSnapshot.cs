﻿// <auto-generated />
using System;
using Etour.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Etour.Migrations
{
    [DbContext(typeof(EtourContext))]
    partial class EtourContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Etour.Model.Booking_Header_Table", b =>
                {
                    b.Property<int>("Booking_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Booking_id"));

                    b.Property<DateTime>("Booking_Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("Cust_Id")
                        .HasColumnType("int");

                    b.Property<int?>("Customer_MastersCust_Id")
                        .HasColumnType("int");

                    b.Property<int?>("Date_MastersDeparture_id")
                        .HasColumnType("int");

                    b.Property<int>("Departure_id")
                        .HasColumnType("int");

                    b.Property<int>("No_of_Passenger")
                        .HasColumnType("int");

                    b.Property<int?>("Package_MastersPkg_id")
                        .HasColumnType("int");

                    b.Property<int>("Pkg_Id")
                        .HasColumnType("int");

                    b.Property<double>("Taxes")
                        .HasColumnType("float");

                    b.Property<double>("Total_Amount")
                        .HasColumnType("float");

                    b.Property<double>("Tour_Amount")
                        .HasColumnType("float");

                    b.HasKey("Booking_id");

                    b.HasIndex("Customer_MastersCust_Id");

                    b.HasIndex("Date_MastersDeparture_id");

                    b.HasIndex("Package_MastersPkg_id");

                    b.ToTable("Booking_Header_Tables");
                });

            modelBuilder.Entity("Etour.Model.Category_Master", b =>
                {
                    b.Property<int>("CatMaster_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CatMaster_Id"));

                    b.Property<string>("Cat_Id")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cat_Image_Path")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cat_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Flag")
                        .HasColumnType("bit");

                    b.Property<string>("SubCat_Id")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CatMaster_Id");

                    b.ToTable("Category_Masters");
                });

            modelBuilder.Entity("Etour.Model.Cost_Master", b =>
                {
                    b.Property<int>("Cost_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Cost_Id"));

                    b.Property<int>("Catmaster_Id")
                        .HasColumnType("int");

                    b.Property<double>("Child_with_Bed")
                        .HasColumnType("float");

                    b.Property<double>("Child_without_Bed")
                        .HasColumnType("float");

                    b.Property<int>("Cost")
                        .HasColumnType("int");

                    b.Property<double>("Extra_Person_Cost")
                        .HasColumnType("float");

                    b.Property<double>("Single_Person_Cost")
                        .HasColumnType("float");

                    b.Property<DateTime>("Valid_From")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Valid_To")
                        .HasColumnType("datetime2");

                    b.HasKey("Cost_Id");

                    b.HasIndex("Catmaster_Id");

                    b.ToTable("Cost_Masters");
                });

            modelBuilder.Entity("Etour.Model.Customer_Master", b =>
                {
                    b.Property<int>("Cust_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Cust_Id"));

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<int>("Country_Code")
                        .HasColumnType("int");

                    b.Property<string>("Cust_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone_Number")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Proof_Id")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Cust_Id");

                    b.ToTable("Customer_Masters");
                });

            modelBuilder.Entity("Etour.Model.Date_Master", b =>
                {
                    b.Property<int>("Departure_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Departure_id"));

                    b.Property<int>("Catmaster_Id")
                        .HasColumnType("int");

                    b.Property<DateTime>("Depart_date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("End_date")
                        .HasColumnType("datetime2");

                    b.Property<int>("No_Of_Days")
                        .HasColumnType("int");

                    b.HasKey("Departure_id");

                    b.HasIndex("Catmaster_Id");

                    b.ToTable("Date_Masters");
                });

            modelBuilder.Entity("Etour.Model.Itinerary_Master", b =>
                {
                    b.Property<int>("itr_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("itr_Id"));

                    b.Property<int>("Catmaster_Id")
                        .HasColumnType("int");

                    b.Property<string>("Itr_Dtl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Tour_Duration")
                        .HasColumnType("int");

                    b.HasKey("itr_Id");

                    b.HasIndex("Catmaster_Id");

                    b.ToTable("Itireneries");
                });

            modelBuilder.Entity("Etour.Model.Package_Master", b =>
                {
                    b.Property<int>("Pkg_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Pkg_id"));

                    b.Property<int>("CatMaster_id")
                        .HasColumnType("int");

                    b.Property<int?>("Category_MastersCatMaster_Id")
                        .HasColumnType("int");

                    b.Property<string>("Pkg_Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Pkg_id");

                    b.HasIndex("Category_MastersCatMaster_Id");

                    b.ToTable("Package_Masters");
                });

            modelBuilder.Entity("Etour.Model.Passenger_Table", b =>
                {
                    b.Property<int>("Pax_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Pax_id"));

                    b.Property<int>("Booking_id")
                        .HasColumnType("int");

                    b.Property<DateTime>("Pax_Birthdate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Pax_Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Pax_amount")
                        .HasColumnType("float");

                    b.Property<string>("Pax_name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Pax_id");

                    b.HasIndex("Booking_id");

                    b.ToTable("Passenger_Tables");
                });

            modelBuilder.Entity("Etour.Model.Booking_Header_Table", b =>
                {
                    b.HasOne("Etour.Model.Customer_Master", "Customer_Masters")
                        .WithMany("Booking_Header_Tables")
                        .HasForeignKey("Customer_MastersCust_Id");

                    b.HasOne("Etour.Model.Date_Master", "Date_Masters")
                        .WithMany("Booking_Header_Tables")
                        .HasForeignKey("Date_MastersDeparture_id");

                    b.HasOne("Etour.Model.Package_Master", "Package_Masters")
                        .WithMany("Booking_Headers")
                        .HasForeignKey("Package_MastersPkg_id");

                    b.Navigation("Customer_Masters");

                    b.Navigation("Date_Masters");

                    b.Navigation("Package_Masters");
                });

            modelBuilder.Entity("Etour.Model.Cost_Master", b =>
                {
                    b.HasOne("Etour.Model.Category_Master", "Category_Master")
                        .WithMany("Cost_Masters")
                        .HasForeignKey("Catmaster_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category_Master");
                });

            modelBuilder.Entity("Etour.Model.Date_Master", b =>
                {
                    b.HasOne("Etour.Model.Category_Master", "Category_Master")
                        .WithMany("Date_Masters")
                        .HasForeignKey("Catmaster_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category_Master");
                });

            modelBuilder.Entity("Etour.Model.Itinerary_Master", b =>
                {
                    b.HasOne("Etour.Model.Category_Master", "Category_Master")
                        .WithMany("Itinnerary_Masters")
                        .HasForeignKey("Catmaster_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category_Master");
                });

            modelBuilder.Entity("Etour.Model.Package_Master", b =>
                {
                    b.HasOne("Etour.Model.Category_Master", "Category_Masters")
                        .WithMany("Package_Masters")
                        .HasForeignKey("Category_MastersCatMaster_Id");

                    b.Navigation("Category_Masters");
                });

            modelBuilder.Entity("Etour.Model.Passenger_Table", b =>
                {
                    b.HasOne("Etour.Model.Booking_Header_Table", "Booking_Header")
                        .WithMany("Passenger_Tables")
                        .HasForeignKey("Booking_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Booking_Header");
                });

            modelBuilder.Entity("Etour.Model.Booking_Header_Table", b =>
                {
                    b.Navigation("Passenger_Tables");
                });

            modelBuilder.Entity("Etour.Model.Category_Master", b =>
                {
                    b.Navigation("Cost_Masters");

                    b.Navigation("Date_Masters");

                    b.Navigation("Itinnerary_Masters");

                    b.Navigation("Package_Masters");
                });

            modelBuilder.Entity("Etour.Model.Customer_Master", b =>
                {
                    b.Navigation("Booking_Header_Tables");
                });

            modelBuilder.Entity("Etour.Model.Date_Master", b =>
                {
                    b.Navigation("Booking_Header_Tables");
                });

            modelBuilder.Entity("Etour.Model.Package_Master", b =>
                {
                    b.Navigation("Booking_Headers");
                });
#pragma warning restore 612, 618
        }
    }
}
