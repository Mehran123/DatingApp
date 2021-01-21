namespace DatingApp.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PassworthHash { get; set; }
        public byte[] PassworthSlat { get; set; }
    }
}
