# node-ignite-05

## Princípios S.O.L.I.D 
<br>

### <strong>S => SRP - Single Responsability Principle</strong>
Uma classe deve exercer uma <strong>única</strong> função e nada mais. <br>
Por exemplo: a classe de rotas deve exercer o papel de rotas e não de um respositório.
#

### <strong>O => OCP - Open-Closed-Principle</strong>
Entidades de software devem ser abertas para extensão, mas fechadas para modificação"; isto é, a entidade pode permitir que o seu comportamento seja estendido sem modificar seu código-fonte.
#   

### <strong>L => LSP - Liskov Substituion Principle</strong>
Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass. - <strong>Classe To Interface.</strong>

Invés de uma classe herdar de outra classe passamos uma interface, de modo que, se precisarmos adicionarmos outra classe basta apenas hedar da interface, como espécie de contrato.
#

### <strong>I => ISP - Interface Segregation Principle</strong>
No campo da engenharia de software, o princípio da segregação de Interface afirma que nenhum cliente deve ser forçados a depender de métodos que não utiliza.
# 

### <strong>D => DIP - Dependecy Inversion Principle</strong>
In object-oriented design, the dependency inversion principle is a specific form of loosely coupling software modules. ... The principle states: High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces).
#