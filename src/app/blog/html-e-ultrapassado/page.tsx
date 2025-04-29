import Header from "@/components/Header";
import Image from "next/image";

export default function HtmlPost() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="container max-w-4xl mx-auto px-4 py-12">
        
        <div className="w-full mb-8">
          <Image
            src="/images/html.png"
            alt="Imagem de capa do artigo sobre HTML"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-gray-100 text-black text-sm font-semibold px-3 py-1 rounded-full">
                HTML
            </span>
            <span className="bg-gray-100 text-black text-sm font-semibold px-3 py-1 rounded-full">
                Web Development
            </span>
            <span className="bg-gray-100 text-black text-sm font-semibold px-3 py-1 rounded-full">
                Carreira
            </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          HTML é ultrapassado? Entenda por que ele ainda é essencial
        </h1>

        <div className="text-center text-gray-500 text-sm mb-12">
          28 Abr 2025 &nbsp; | &nbsp; Por Leonardo Lopes Ricci
        </div>

        <div className="space-y-20">
          
          <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
            <p>Em um mercado onde surgem novas tecnologias quase todos os meses, é natural pensar que algumas linguagens "antigas" ficaram para trás.</p>
            <p><strong>Uma dúvida que aparece bastante é:</strong> HTML ainda é relevante?</p>
            <p>A resposta é simples: <strong>não só é relevante — como é essencial</strong>.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HTML é a base da web</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <p>Toda aplicação web, <strong>não importa o quão moderna seja</strong>, depende do HTML para estruturar o conteúdo.</p>
              <p>Se você usa <strong>React</strong>, <strong>Next.js</strong>, <strong>Vue</strong> ou qualquer outro framework moderno, no final das contas, o que está sendo entregue ao navegador é... <strong>HTML</strong>.</p>
              <ul>
                <li>Um botão bonito? Por trás, é um <code>&lt;button&gt;</code>.</li>
                <li>Um formulário de pagamento? É um conjunto de <code>&lt;input&gt;</code>s, <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>.</li>
                <li>Um blogpost, como esse? Estruturado em <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;section&gt;</code>.</li>
              </ul>
              <p>Sem HTML, a web simplesmente <strong>não existiria</strong>.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mas quem ainda escreve HTML hoje?</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <p>Muita gente! E não apenas em projetos "simples".</p>
              <p><strong>Onde o HTML puro ainda é escrito e usado ativamente:</strong></p>
              <ul>
                <li>Em <strong>landing pages</strong> otimizadas para SEO.</li>
                <li>Em <strong>emails marketing</strong> (newsletters são HTML puro).</li>
                <li>Em <strong>sistemas internos</strong> que priorizam velocidade e simplicidade.</li>
                <li>Em <strong>componentização de layouts</strong> (JSX é HTML disfarçado).</li>
              </ul>
              <p>Além disso, <strong>profissionais de Frontend</strong>, <strong>Web Designers</strong> e <strong>Desenvolvedores Full Stack</strong> lidam com HTML todos os dias.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HTML é a nova "velha escola" — e isso é uma vantagem</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <p>Saber HTML hoje é como dominar o alicerce de um prédio: <strong>as tecnologias passam, a base permanece</strong>.</p>
              <p>Frameworks mudam. Abordagens mudam. Mas se você entende bem HTML:</p>
              <ul>
                <li>Cria componentes mais acessíveis.</li>
                <li>Trabalha melhor com SEO.</li>
                <li>Entrega páginas mais rápidas e eficientes.</li>
                <li>Constrói produtos que funcionam melhor para todos os usuários.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <p><strong>HTML não é ultrapassado — ele é atemporal.</strong></p>
              <p>Se você quer se destacar como desenvolvedor, entender HTML profundamente ainda é uma das habilidades mais valiosas que você pode ter.</p>
              <p>E da próxima vez que alguém disser que HTML é coisa do passado... lembre-se: <strong>a web nunca deixou de ser construída sobre ele</strong>.</p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
