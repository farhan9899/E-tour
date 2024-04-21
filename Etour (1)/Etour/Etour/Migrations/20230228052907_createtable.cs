using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Etour.Migrations
{
    /// <inheritdoc />
    public partial class createtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category_Masters",
                columns: table => new
                {
                    CatMaster_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Cat_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubCat_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cat_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cat_Image_Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Flag = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category_Masters", x => x.CatMaster_Id);
                });

            migrationBuilder.CreateTable(
                name: "Customer_Masters",
                columns: table => new
                {
                    Cust_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Cust_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country_Code = table.Column<int>(type: "int", nullable: false),
                    Phone_Number = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Proof_Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer_Masters", x => x.Cust_Id);
                });

            migrationBuilder.CreateTable(
                name: "Cost_Masters",
                columns: table => new
                {
                    Cost_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Catmaster_Id = table.Column<int>(type: "int", nullable: false),
                    Cost = table.Column<int>(type: "int", nullable: false),
                    Single_Person_Cost = table.Column<double>(type: "float", nullable: false),
                    Extra_Person_Cost = table.Column<double>(type: "float", nullable: false),
                    Child_with_Bed = table.Column<double>(type: "float", nullable: false),
                    Child_without_Bed = table.Column<double>(type: "float", nullable: false),
                    Valid_From = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Valid_To = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cost_Masters", x => x.Cost_Id);
                    table.ForeignKey(
                        name: "FK_Cost_Masters_Category_Masters_Catmaster_Id",
                        column: x => x.Catmaster_Id,
                        principalTable: "Category_Masters",
                        principalColumn: "CatMaster_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Date_Masters",
                columns: table => new
                {
                    Departure_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Catmaster_Id = table.Column<int>(type: "int", nullable: false),
                    Depart_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    End_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    No_Of_Days = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Date_Masters", x => x.Departure_id);
                    table.ForeignKey(
                        name: "FK_Date_Masters_Category_Masters_Catmaster_Id",
                        column: x => x.Catmaster_Id,
                        principalTable: "Category_Masters",
                        principalColumn: "CatMaster_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Itireneries",
                columns: table => new
                {
                    itr_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Catmaster_Id = table.Column<int>(type: "int", nullable: false),
                    Tour_Duration = table.Column<int>(type: "int", nullable: false),
                    Itr_Dtl = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Itireneries", x => x.itr_Id);
                    table.ForeignKey(
                        name: "FK_Itireneries_Category_Masters_Catmaster_Id",
                        column: x => x.Catmaster_Id,
                        principalTable: "Category_Masters",
                        principalColumn: "CatMaster_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Package_Masters",
                columns: table => new
                {
                    Pkg_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CatMaster_id = table.Column<int>(type: "int", nullable: false),
                    Pkg_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category_MastersCatMaster_Id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Package_Masters", x => x.Pkg_id);
                    table.ForeignKey(
                        name: "FK_Package_Masters_Category_Masters_Category_MastersCatMaster_Id",
                        column: x => x.Category_MastersCatMaster_Id,
                        principalTable: "Category_Masters",
                        principalColumn: "CatMaster_Id");
                });

            migrationBuilder.CreateTable(
                name: "Booking_Header_Tables",
                columns: table => new
                {
                    Booking_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Booking_Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Cust_Id = table.Column<int>(type: "int", nullable: false),
                    Pkg_Id = table.Column<int>(type: "int", nullable: false),
                    Departure_id = table.Column<int>(type: "int", nullable: false),
                    No_of_Passenger = table.Column<int>(type: "int", nullable: false),
                    Tour_Amount = table.Column<double>(type: "float", nullable: false),
                    Taxes = table.Column<double>(type: "float", nullable: false),
                    Total_Amount = table.Column<double>(type: "float", nullable: false),
                    Customer_MastersCust_Id = table.Column<int>(type: "int", nullable: true),
                    Package_MastersPkg_id = table.Column<int>(type: "int", nullable: true),
                    Date_MastersDeparture_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Booking_Header_Tables", x => x.Booking_id);
                    table.ForeignKey(
                        name: "FK_Booking_Header_Tables_Customer_Masters_Customer_MastersCust_Id",
                        column: x => x.Customer_MastersCust_Id,
                        principalTable: "Customer_Masters",
                        principalColumn: "Cust_Id");
                    table.ForeignKey(
                        name: "FK_Booking_Header_Tables_Date_Masters_Date_MastersDeparture_id",
                        column: x => x.Date_MastersDeparture_id,
                        principalTable: "Date_Masters",
                        principalColumn: "Departure_id");
                    table.ForeignKey(
                        name: "FK_Booking_Header_Tables_Package_Masters_Package_MastersPkg_id",
                        column: x => x.Package_MastersPkg_id,
                        principalTable: "Package_Masters",
                        principalColumn: "Pkg_id");
                });

            migrationBuilder.CreateTable(
                name: "Passenger_Tables",
                columns: table => new
                {
                    Pax_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Booking_id = table.Column<int>(type: "int", nullable: false),
                    Pax_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pax_Birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Pax_Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pax_amount = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Passenger_Tables", x => x.Pax_id);
                    table.ForeignKey(
                        name: "FK_Passenger_Tables_Booking_Header_Tables_Booking_id",
                        column: x => x.Booking_id,
                        principalTable: "Booking_Header_Tables",
                        principalColumn: "Booking_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Booking_Header_Tables_Customer_MastersCust_Id",
                table: "Booking_Header_Tables",
                column: "Customer_MastersCust_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_Header_Tables_Date_MastersDeparture_id",
                table: "Booking_Header_Tables",
                column: "Date_MastersDeparture_id");

            migrationBuilder.CreateIndex(
                name: "IX_Booking_Header_Tables_Package_MastersPkg_id",
                table: "Booking_Header_Tables",
                column: "Package_MastersPkg_id");

            migrationBuilder.CreateIndex(
                name: "IX_Cost_Masters_Catmaster_Id",
                table: "Cost_Masters",
                column: "Catmaster_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Date_Masters_Catmaster_Id",
                table: "Date_Masters",
                column: "Catmaster_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Itireneries_Catmaster_Id",
                table: "Itireneries",
                column: "Catmaster_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Package_Masters_Category_MastersCatMaster_Id",
                table: "Package_Masters",
                column: "Category_MastersCatMaster_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Passenger_Tables_Booking_id",
                table: "Passenger_Tables",
                column: "Booking_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cost_Masters");

            migrationBuilder.DropTable(
                name: "Itireneries");

            migrationBuilder.DropTable(
                name: "Passenger_Tables");

            migrationBuilder.DropTable(
                name: "Booking_Header_Tables");

            migrationBuilder.DropTable(
                name: "Customer_Masters");

            migrationBuilder.DropTable(
                name: "Date_Masters");

            migrationBuilder.DropTable(
                name: "Package_Masters");

            migrationBuilder.DropTable(
                name: "Category_Masters");
        }
    }
}
