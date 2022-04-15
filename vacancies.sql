-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 15/04/2022 às 09:01
-- Versão do servidor: 10.4.24-MariaDB
-- Versão do PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `plx`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `vacancies`
--

CREATE TABLE `vacancies` (
  `id` int(11) NOT NULL,
  `company_vacancies` varchar(255) DEFAULT NULL,
  `occupation_vacancies` varchar(255) DEFAULT NULL,
  `location_vacancies` varchar(255) DEFAULT NULL,
  `payment_vacancies` varchar(255) DEFAULT NULL,
  `journey_vacancies` varchar(255) DEFAULT NULL,
  `experience_vacancies` varchar(255) DEFAULT NULL,
  `note_vacancies` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `vacancies`
--

INSERT INTO `vacancies` (`id`, `company_vacancies`, `occupation_vacancies`, `location_vacancies`, `payment_vacancies`, `journey_vacancies`, `experience_vacancies`, `note_vacancies`, `createdAt`, `updatedAt`) VALUES
(1, 'Plataforma Internacional', 'Desenvolvedor Web', 'Alphaville SP', 'a combinar', 'Seg a Sex', '1 - 2 Anos', 'Trabalhar nas plataformas do ecossistema.', '0000-00-00', '0000-00-00'),
(4, 'Plataforma Multi', 'Analista de Banco de Dados', 'Jandira SP', 'a combinar', 'Seg a Sex', '2 - 3 Anos', 'Analisar todos os dados projetos', '2022-04-14', '2022-04-14'),
(7, 'Plataforma Max', 'Programador JAVA', 'Osasco SP', 'a combinar', 'Seg a Sex', '1 - 4 Anos', 'Criar app para android', '2022-04-14', '2022-04-15'),
(16, 'Plataforma Super', 'Analista BI', 'Carapicuiba SP', 'a combinar', 'Seg a Sex', '1 - 2 Anos', 'Implantação de sistema', '2022-04-14', '2022-04-15'),
(17, 'Plataforma White Label', 'Programador PHP', 'Jardim Belval SP', 'a combinar', 'Seg a Sex', '6 - 7 Anos', 'Desenvolver sites', '2022-04-14', '2022-04-14'),
(18, 'Plataforma Comércio', 'Suporte de Rede', 'Silveira SP', 'a combinar', 'Seg a Sex', '8 - 9 Anos', 'Estruturar cabeamentos', '2022-04-14', '2022-04-14');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `vacancies`
--
ALTER TABLE `vacancies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `vacancies`
--
ALTER TABLE `vacancies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
