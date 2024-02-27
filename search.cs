class Program
{
    public static void Main(string[] args)
    {
        int[] arr = { 4, 5, 3, 2, 4, 1 };
        int search = 0;
        Console.WriteLine("enter number to search");
        search = Convert.ToInt32 (Console.ReadLine());
        int len = arr.Length;
        for(int i = 0;i < len; i++)
        {
            if (arr[i] == search)
            {
                Console.WriteLine("item found at position  " + ++i);
                Console.ReadKey();
                return;
            }

        }
        Console.WriteLine("item not found");
        Console.ReadKey();

    }
}
