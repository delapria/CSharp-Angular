using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.AcessoDados
{
    public class AppController : Controller
    {
        public IActionResult Loja()
        {
            return View();
        }
    }
}
