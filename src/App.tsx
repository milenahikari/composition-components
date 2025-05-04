import { Input } from "./components/Input";

import { MailIcon, LockIcon } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col items-center h-screen p-8 gap-8 bg-gray-200">
      <h1 className="mb-5 font-bold">Composition components</h1>

      <div className="flex flex-col gap-2 w-1/4">
        <h2 className="font-semibold">Formulário COM ícones</h2>

        <Input.Root>
          <Input.Label text="E-mail" />
          <Input.Container>
            <Input.Icon icon={MailIcon} />
            <Input.Field placeholder="Digite seu e-mail" />
          </Input.Container>
        </Input.Root>

        <Input.Root>
          <Input.Label text="Senha" />

          <Input.Container>
            <Input.Icon icon={LockIcon} />
            <Input.Field placeholder="Digite sua senha" />
          </Input.Container>
        </Input.Root>
      </div>

      <div className="flex flex-col gap-2 w-1/4">
        <h2 className="font-semibold">Formulário SEM ícones</h2>
        <Input.Root>
          <Input.Label text="Nome" />
          <Input.Container>
            <Input.Field placeholder="Digite seu nome" />
          </Input.Container>
        </Input.Root>

        <Input.Root>
          <Input.Label text="Sobrenome" />
          <Input.Container>
            <Input.Field placeholder="Digite seu sobrenome" />
          </Input.Container>
        </Input.Root>
      </div>

      <div className="flex flex-col gap-2 w-1/4">
        <h2 className="font-semibold">Formulário SEM label</h2>
        <Input.Root>
          <Input.Container>
            <Input.Field placeholder="Digite algo" />
          </Input.Container>
        </Input.Root>

        <Input.Root>
          <Input.Container>
            <Input.Field placeholder="Digite algo" />
          </Input.Container>
        </Input.Root>
      </div>
    </div>
  );
}

export default App;
