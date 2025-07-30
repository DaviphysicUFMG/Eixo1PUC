class Program
{
    static void Main (string[] args)
    {
        int[,] Matriz = new int [5,5]
        int [,] VetorResultante = new int [5];
        for (int i=0; i < 5; i++)   
        {
            for (int j=0 j < 5; j++)
            {
                console.write($"Elemento ({i+1},{j+1}):");
                Matriz[i,j] = int.Parse(Console.Readline());
            }
        }
        VetorResultante = ExtraiDiagPrinc (Matriz);
        Console.Write("\n\nDiagonal Principal: ");
        for (int i=0; i < 5; i++)
        {
            Console.Write($"{VetorResultante[i],7}");
        }
        Console.Write("\n");
        Console.Readkey();
    }

    static int [] ExtraiDiagPrinc (int[,] M)
    {
        int[] Result = new int[5];
        for (int i=0; i < 5; i++)
        `{
            for (int j=0; j < 5; j++)
            {
                if (i == j)
                {
                    Result[i] = M[i,j];
                }
            }
        }
    }
         return Result;
    }

}