using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Api.Entities;

namespace Api.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            try
            {

                if (await context.Users.AnyAsync()) return;
                var userData = await File.ReadAllTextAsync("Data/UserSeedData.json");

                var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
                foreach (var user in users)
                {
                    using var hamc = new HMACSHA512();
                    user.UserName = user.UserName.ToLower();
                    user.PassworthHash = hamc.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
                    user.PassworthSlat = hamc.Key;

                    context.Users.Add(user);
                }

                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

        }
    }
}
