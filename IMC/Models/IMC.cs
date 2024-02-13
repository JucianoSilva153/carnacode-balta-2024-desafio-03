using IMC.Enums;

namespace IMC.Models;

    public class CalculoIMC
{
    public decimal Altura { get; set; }

        public decimal Peso { get; set; }

        public string TipoSexo { get; set; }

        public bool SessentaECincoAnosOuMais { get; set; }

        public decimal ResultadoIMC { get; set; }

        public EnumClassicacaoIMC EnumClassicacaoIMC { get; set; }

          public DateTime DataDoCalculo { get; set; }
}

