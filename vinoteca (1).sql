-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-11-2023 a las 20:48:05
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vinoteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo_vinos`
--

DROP TABLE IF EXISTS `catalogo_vinos`;
CREATE TABLE IF NOT EXISTS `catalogo_vinos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `marca` varchar(250) NOT NULL,
  `precio` varchar(250) NOT NULL,
  `clasificacion` varchar(250) NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `catalogo_vinos`
--

INSERT INTO `catalogo_vinos` (`id`, `nombre`, `marca`, `precio`, `clasificacion`, `img_id`) VALUES
(63, 'Champagne Taittinger Brut Reserva 750Ml', 'Taittinger ', '427.800', 'Champagne', 'urtljmddzszravm4e23o'),
(55, 'Vino Undurraga Brut Rose Royal 750Ml', 'Undurraga ', '99.600', 'Rosado', 'fdlikrnqnmb07hp8mpp8'),
(51, 'Vino Tinto Portillo Malbec 750Ml', 'Malbec ', '61.000', 'Tinto ', 'grxjc62ujadz3nvcxttv'),
(62, 'Vino Espumoso Recaredo Intens Rosat Brut Nat G. Rva 750Ml', 'Recaredo ', '244.444', 'champagne', 'dheayjhcd9qq7xei3lyz'),
(50, 'Vino Tinto Lazo Cabernet', 'Cabernet', '43.300', 'Tinto', 'nuanschpzqcwj79p6zkx'),
(49, 'Vino Tinto Aliwen Reserva Cabernet', 'Cabernet Sauvignon', '85.001', 'Tinto', 'nxdojglh9nwsaxmbncai'),
(54, 'Vino Blanco Th-Undurraga Sauvignon (Leyda) 750Ml', 'Th-Undurraga', '214.400', 'Blanco ', 'bsaefohb0cmi5nalclen'),
(53, 'Vino Tinto Aliwen Reserva Pinot Noir 750Ml', 'Aliwen ', '85.000', 'Tinto ', 'fhdux8trclqrckdjz5et'),
(52, 'Vino Rosado Portillo Rose 750Ml', 'Portillo ', '45.750', 'Rosado ', 'dqclevti6lyrkeslifuj'),
(56, 'Vino Tinto U By Undurraga Cabernet Sauvignon 750Ml', 'Undurraga ', '71.700', 'Tinto ', 'rbasabbfglqrpzxul6hr'),
(57, 'WHISKY JOHNNIE WALKER BLACK IC12A 700ML 750 ml', 'JOHNNIE WALKER', '172.581', 'WHISKY', 'jekpbnylww71cvairylt'),
(58, 'WHISKY OLD PARR 18 AÑOS 750ml 750 ml', 'OLD PARR 18', '331.900', 'WHISKY', 'r2gkatmko4hmtexd5i7p'),
(59, 'WHISKY JOHNNIE WALKER RED ICON 700ml 750 ml', 'JOHNNIE WALKER', '66.810', 'WHISKY', 'rg5zq0bbok1dea9npbwf'),
(60, 'TEQUILA DON JULIO BLANCO X700ML 750 ml', 'DON JULIO', '211.123', 'TEQUILA ', 'su9zljavesflgsng2ofr'),
(61, 'Vino Dubonnet Botella 750Ml', 'Dubonnet', '62.899', 'aperitivo', 'gvieomjej6ltc3jthamj');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(3, 'guillermina', 'ed7f27d58a1b95699e17a7f94d1a6f9a'),
(1, 'sebastian', '55087721299e65f60d952a5b47b70f4c'),
(5, 'emi', '12b41c761b41698d39ef68fdd9429578');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
