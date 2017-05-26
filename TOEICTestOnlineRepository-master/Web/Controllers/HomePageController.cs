using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class HomePageController : Controller
    {
        // GET: HomePage
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DangKy()
        {
            return View();
        }
        
        public ActionResult TestTransfer(string name)
        {
            var lst_str = new List<string>()
            {
                "str1", "str2", "str2",
            };
            ViewBag.lst_str = lst_str;

            ViewBag.name = name;
            return View();
        }
    }
}