import Header from "@/components/Header";
import Image from "next/image";

export default function GitPost() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="container max-w-4xl mx-auto px-4 py-12">
        <div className="w-full mb-8">
          <Image
            src="/images/comandos-git.png"
            alt="Imagem de capa do artigo sobre comandos Git"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-gray-100 text-black text-sm font-semibold px-3 py-1 rounded-full">
            Git
          </span>
          <span className="bg-gray-100 text-black text-sm font-semibold px-3 py-1 rounded-full">
            Versionamento
          </span>
          <span className="bg-gray-100 text-black text-sm font-semibold px-3 py-1 rounded-full">
            Carreira Dev
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Os Principais Comandos do Git Que Todo Dev Precisa Saber
        </h1>

        <div className="text-center text-gray-500 text-sm mb-12">
          29 Abr 2025 &nbsp; | &nbsp; Por Leonardo Lopes Ricci
        </div>

        <div className="space-y-20">

          {/* Seções do artigo */}
          <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
            <p>O Git é essencial para qualquer desenvolvedor. Dominar seus comandos principais pode economizar tempo, evitar erros e melhorar sua colaboração em equipe.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Histórico de Commits</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <ul>
                <li><code>git log</code> — Histórico completo dos commits.</li>
                <li><code>git log --oneline</code> — Histórico resumido com hash curto.</li>
                <li><code>git log -p</code> — Diferenças de cada commit.</li>
                <li><code>git log --graph</code> — Visualiza merges com gráfico.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Investigando Commits</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <ul>
                <li><code>git show &lt;hash&gt;</code> — Mostra alterações de um commit.</li>
                <li><code>git blame &lt;arquivo&gt;</code> — Informa quem editou cada linha do arquivo.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Branches e Navegação</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <ul>
                <li><code>git branch</code> — Lista branches.</li>
                <li><code>git switch &lt;nome&gt;</code> — Troca de branch.</li>
                <li><code>git switch -c &lt;nome&gt;</code> — Cria e troca para nova branch.</li>
                <li><code>git merge &lt;branch&gt;</code> — Faz merge de branch.</li>
                <li><code>git rebase &lt;branch&gt;</code> — Aplica commits em outra branch.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manipulando Mudanças</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <ul>
                <li><code>git add</code> — Adiciona arquivo ao staging.</li>
                <li><code>git restore</code> — Desfaz alterações locais.</li>
                <li><code>git restore --staged</code> — Remove do staging.</li>
                <li><code>git stash</code> — Engaveta mudanças.</li>
                <li><code>git stash pop</code> — Restaura mudanças engavetadas.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sincronizando com o Repositório Remoto</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <ul>
                <li><code>git clone &lt;url&gt;</code> — Clona repositório remoto.</li>
                <li><code>git pull</code> — Puxa e mescla mudanças do remoto.</li>
                <li><code>git fetch</code> — Atualiza referências do remoto.</li>
                <li><code>git push</code> — Envia commits para o repositório remoto.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <div className="prose prose-lg prose-sky dark:prose-invert mx-auto">
              <p>Esses comandos cobrem praticamente tudo o que você precisa para dominar o Git no dia a dia. Com prática, eles se tornam naturais e te ajudam a ser mais produtivo.</p>
              <p>Agora é só aplicar no seu repositório e começar a versionar com confiança!</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
