-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-11-08 09:40:10
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empty`
--
CREATE DATABASE IF NOT EXISTS `empty` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `empty`;

-- --------------------------------------------------------

--
-- 表的结构 `cn_imgclass`
--

CREATE TABLE `cn_imgclass` (
  `ids` int(10) NOT NULL,
  `dates` datetime DEFAULT NULL,
  `uppdates` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `imgurl1` varchar(220) DEFAULT NULL,
  `imgurl2` varchar(220) DEFAULT NULL,
  `imgurl3` varchar(220) DEFAULT NULL,
  `envar1` varchar(255) DEFAULT NULL,
  `var1` varchar(255) DEFAULT NULL,
  `var2` varchar(200) DEFAULT NULL,
  `var3` varchar(200) DEFAULT NULL,
  `var4` varchar(200) DEFAULT NULL,
  `tagids` int(10) DEFAULT NULL,
  `tagtype` varchar(20) DEFAULT NULL,
  `noooo` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cn_imgclass`
--

INSERT INTO `cn_imgclass` (`ids`, `dates`, `uppdates`, `imgurl1`, `imgurl2`, `imgurl3`, `envar1`, `var1`, `var2`, `var3`, `var4`, `tagids`, `tagtype`, `noooo`) VALUES
(5666, NULL, '2018-11-08 09:29:46', 'product/1531465717793792.jpg', '/product/mini1531465717353272.jpg', NULL, NULL, '保加利亚米黄', '900x1800mm', '', NULL, 247, 'cp', 1),
(5683, NULL, '2018-11-08 09:29:21', 'product/1531466051215607.jpg', '/product/mini1531466051112244.jpg', NULL, NULL, '卡芙诺浅灰', '', '', NULL, 252, 'cp', 2),
(5667, NULL, '2018-11-08 09:29:19', 'product/15314657348332.jpg', '/mini1531465734644226.jpg', NULL, NULL, '保加利亚米黄', '', '', NULL, 247, 'cp', 2),
(5668, NULL, '2018-11-08 09:29:15', 'product/1531465741503632.jpg', '/product/mini1531465741788208.jpg', NULL, NULL, '保加利亚米黄', '', '', NULL, 247, 'cp', 3),
(5669, NULL, '2018-11-08 09:29:12', 'product/1531465792781158.jpg', '/product/mini1531465792694885.jpg', NULL, NULL, '至尊海岩砂浅灰', '900x1800mm', '', '', 248, 'cp', 1),
(5670, NULL, '2018-11-08 09:29:09', 'product/1531465826587982.jpg', '/product/mini1531465826294922.jpg', NULL, NULL, '至尊海岩砂浅灰', '', '', '', 248, 'cp', 2),
(5671, NULL, '2018-11-08 09:29:07', 'product/1531465866698578.jpg', '', NULL, NULL, '至尊海岩砂深灰', '900x1800mm', '', NULL, 249, 'cp', 1),
(5672, NULL, '2018-11-08 09:29:04', 'product/1531465873260773.jpg', '/product/mini1531465873910339.jpg', NULL, NULL, '至尊海岩砂深灰', '', '', '', 249, 'cp', 2),
(5673, NULL, '2018-11-08 09:29:01', 'product/1531465881259979.jpg', '/product/mini1531465881980102.jpg', NULL, NULL, '至尊海岩砂深灰', '', '', '', 249, 'cp', 3),
(5674, NULL, '2018-11-08 09:28:58', '/product/1531465908228913.jpg', '/product/mini1531465908250061.jpg', NULL, NULL, '菲拉格慕', '900x1800mm', '', NULL, 250, 'cp', 1),
(5675, NULL, '2018-11-08 09:28:55', '/product/1531465916852142.jpg', '/product/mini1531465916838379.jpg', NULL, NULL, '菲拉格慕', '', '', NULL, 250, 'cp', 2),
(5676, NULL, '2018-11-08 09:28:52', '/product/1531465921523224.jpg', '/product/mini1531465921142517.jpg', NULL, NULL, '菲拉格慕', '', '', NULL, 250, 'cp', 3),
(5677, NULL, '2018-11-08 09:28:50', '/product/1531465951895416.jpg', '/product/mini1531465951648987.jpg', NULL, NULL, '至尊海岩砂浅灰', '', '', NULL, 248, 'cp', 3),
(5678, NULL, '2018-11-08 09:28:47', '/product/1531465994510040.jpg', '', NULL, NULL, '至尊玛瑙', '900x1800mm', '', NULL, 251, 'cp', 1),
(5679, NULL, '2018-11-08 09:28:43', '/product/1531466001558075.jpg', '/product/mini1531466001847534.jpg', NULL, NULL, '至尊玛瑙', '', '', '', 251, 'cp', 2),
(5680, NULL, '2018-11-08 09:28:41', '/product/1531466007320465.jpg', '', NULL, NULL, '至尊玛瑙', '', '', '', 251, 'cp', 3),
(5681, NULL, '2018-11-08 09:28:37', '/product/1531466015840179.jpg', '/product/mini1531466015659424.jpg', NULL, NULL, '至尊玛瑙', '', '', '', 251, 'cp', 4),
(5682, NULL, '2018-11-08 09:28:35', '/product/153146604685053.jpg', '/product/mini1531466046975585.jpg', NULL, NULL, '卡芙诺浅灰', '900x1800mm', '', NULL, 252, 'cp', 1),
(5684, NULL, '2018-11-08 09:28:31', '/product/1531466055892547.jpg', '/product/mini153146605555054.jpg', NULL, NULL, '卡芙诺浅灰', '', '', NULL, 252, 'cp', 3),
(5664, NULL, '2018-11-08 09:28:29', '/product/1531450195181580.jpg', '/product/mini1531450195950164.jpg', NULL, NULL, '至尊鱼肚白', '900x1800mm', '', '', 246, 'cp', 3),
(5662, NULL, '2018-11-08 09:26:59', '/product/1531450164289368.jpg', 'uploadimg/product/mini153145016411567.jpg', NULL, NULL, '至尊鱼肚白', '900x1800mm', '', NULL, 246, 'cp', 2),
(5663, NULL, '2018-11-08 09:28:26', '/product/1531450174771484.jpg', '/product/mini1531450174468536.jp', NULL, NULL, '至尊鱼肚白--', '900x1800mm', '', NULL, 246, 'cp', 3),
(5685, NULL, '2018-11-08 09:28:23', '/product/1531466069628937.jpg', '/product/mini1531466069540222.jpg', NULL, NULL, '卡芙诺深灰', '900x1800mm', '', NULL, 253, 'cp', 1),
(5686, NULL, '2018-11-08 09:28:20', '/product/1531466076417206.jpg', '/product/mini1531466076617798.jpg', NULL, NULL, '卡芙诺深灰', '900x1800mm', '', NULL, 253, 'cp', 2),
(5687, NULL, '2018-11-08 09:28:18', '/product/1531466098690094.jpg', '/product/mini1531466098393860.jpg', NULL, NULL, '卡芙诺深灰', '', '', NULL, 253, 'cp', 3),
(5688, NULL, '2018-11-08 09:20:20', 'uploadimg/product/1531466121901214.jpg', 'uploadimg/product/mini153146612162256.jpg', NULL, NULL, '极品寒江雪', '900x1800mm', '', NULL, 254, 'cp', 1),
(5689, NULL, '2018-11-08 09:20:23', 'uploadimg/product/1531466127287628.jpg', 'uploadimg/product/mini153146612787586.jpg', NULL, NULL, '极品寒江雪', '900x1800mm', '', NULL, 254, 'cp', 2),
(5690, NULL, '2018-11-08 09:20:27', 'uploadimg/product/1531466132829803.jpg', 'uploadimg/product/mini1531466132340943.jpg', NULL, NULL, '极品寒江雪', '', '', NULL, 254, 'cp', 3),
(5691, NULL, '2018-11-08 09:20:31', 'uploadimg/product/1531466145476959.jpg', 'uploadimg/product/mini1531466145287171.jpg', NULL, NULL, '青花瓷', '900x1800mm', '', NULL, 255, 'cp', 1),
(5692, NULL, '2018-11-08 09:20:35', 'uploadimg/product/1531466151897064.jpg', 'uploadimg/product/mini1531466151734863.jpg', NULL, NULL, '青花瓷', '900x1800mm', '', NULL, 255, 'cp', 2),
(5693, NULL, '2018-11-08 09:20:38', 'uploadimg/product/1531466156226837.jpg', 'uploadimg/product/mini1531466156586365.jpg', NULL, NULL, '青花瓷', '', '', NULL, 255, 'cp', 3),
(5694, NULL, '2018-11-08 09:20:42', 'uploadimg/product/1531466210821747.jpg', 'uploadimg/product/mini1531466210587768.jpg', NULL, NULL, '拿铁', '600x1200mm', '', '', 256, 'cp', 1),
(5695, NULL, '2018-11-08 09:20:55', 'uploadimg/product/15314662156012.jpg', 'uploadimg/product/mini153146621578919.jpg', NULL, NULL, 'FHT', '', '', NULL, 256, 'cp', 2),
(5696, NULL, '2018-11-08 09:20:58', 'uploadimg/product/1531466218822601.jpg', 'uploadimg/product/mini1531466218743408.jpg', NULL, NULL, 'FHT', '', '', NULL, 256, 'cp', 3),
(5697, NULL, '2018-11-08 09:21:03', 'uploadimg/product/153146627166010.jpg', 'uploadimg/product/mini1531466271649902.jpg', NULL, NULL, 'FHT', '600x1200mm', '', '', 257, 'cp', 1),
(5698, NULL, '2018-11-08 09:21:06', 'uploadimg/product/1531466275466095.jpg', 'uploadimg/product/mini1531466275165467.jpg', NULL, NULL, 'FHT126', '', '', NULL, 257, 'cp', 2),
(5699, NULL, '2018-11-08 09:21:09', 'uploadimg/product/1531466279443817.jpg', 'uploadimg/product/mini1531466279893432.jpg', NULL, NULL, 'FHT1260', '', '', NULL, 257, 'cp', 3);

-- --------------------------------------------------------

--
-- 表的结构 `cn_menu`
--

CREATE TABLE `cn_menu` (
  `ids` int(10) NOT NULL,
  `dates` datetime DEFAULT NULL,
  `uppdates` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `type` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `linkto` varchar(150) DEFAULT NULL,
  `islevel` int(2) DEFAULT NULL,
  `tagids` int(5) DEFAULT NULL,
  `noooo` int(5) DEFAULT NULL,
  `enname` varchar(52) DEFAULT NULL,
  `iconurl` varchar(255) DEFAULT NULL,
  `subtext` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cn_menu`
--

INSERT INTO `cn_menu` (`ids`, `dates`, `uppdates`, `type`, `name`, `linkto`, `islevel`, `tagids`, `noooo`, `enname`, `iconurl`, `subtext`) VALUES
(1, NULL, '2018-10-31 08:36:22', '1', 'Index', 'index', NULL, 0, 1, 'Home', NULL, NULL),
(2, NULL, '2018-11-08 09:21:27', '1', 'product', 'project', NULL, 0, 2, 'Brand', NULL, NULL),
(3, NULL, '2018-11-08 09:21:55', '1', 'other', 'front', NULL, 0, 3, 'Product', NULL, NULL),
(4, NULL, '2018-11-08 09:22:03', '1', 'other2', 'back', NULL, 0, 4, 'Information', NULL, NULL),
(5, NULL, '2018-10-31 08:37:59', '1', 'About', 'about', NULL, 0, 5, 'News', NULL, NULL),
(6, NULL, '2018-10-31 08:38:05', '1', 'Conent', 'conent', NULL, 0, 6, 'Case', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `cn_product`
--

CREATE TABLE `cn_product` (
  `ids` int(10) NOT NULL,
  `dates` datetime DEFAULT NULL,
  `uppdates` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(50) DEFAULT NULL,
  `zhname` varchar(50) DEFAULT NULL,
  `tagids` int(10) DEFAULT NULL,
  `noooo` int(10) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `v_s0` varchar(255) DEFAULT NULL,
  `v_s1` varchar(255) DEFAULT NULL,
  `v_s2` varchar(255) DEFAULT NULL,
  `tagtype` int(8) DEFAULT NULL,
  `is_homeshow` int(2) DEFAULT NULL,
  `vrurl` varchar(255) DEFAULT NULL,
  `allsize` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cn_product`
--

INSERT INTO `cn_product` (`ids`, `dates`, `uppdates`, `name`, `zhname`, `tagids`, `noooo`, `content`, `v_s0`, `v_s1`, `v_s2`, `tagtype`, `is_homeshow`, `vrurl`, `allsize`) VALUES
(246, NULL, '2018-11-08 09:24:46', '至尊鱼肚白', NULL, 19, NULL, '', NULL, NULL, '意大利', 0, NULL, NULL, NULL),
(247, NULL, '2018-11-08 09:24:51', '保加利亚米黄', NULL, 19, NULL, '保加利亚米黄清晰柔顺的纹理，在大空间的应用上有其独特的优势，整体大块空间与其他石材的搭配应用都甚无拂意。热情豪迈的气度转换至现代家居的空间更大方、时尚。', NULL, NULL, '保加利亚', 0, NULL, NULL, NULL),
(248, NULL, '2018-11-08 09:24:54', '至尊海岩砂浅灰', NULL, 19, NULL, '卡帝朗尊海岩浅灰产品表面若隐若现的海浪纹理，犹如大海在诉说着它柔情，自然柔和的浅灰色，精致却不失高雅，让空间蔓延着尊贵与经典之美。', NULL, NULL, '西班牙', 0, NULL, NULL, NULL),
(249, NULL, '2018-11-08 09:24:57', '至尊海岩砂深灰', NULL, 19, NULL, '海岩砂深灰主要是在浅海的环境下形成的，卡帝朗将粒屑海岩砂构成的流水搬运形态、颗粒碎屑形态、泥晶基质形态还原到瓷砖产品上，更真实的还原海岩砂从碎屑到自然侵蚀到沉积成岩的历史过程。', NULL, NULL, '西班牙', 0, NULL, NULL, NULL),
(250, NULL, '2018-11-08 09:25:02', '菲拉格慕', NULL, 19, NULL, '天然大理石的莹润质感，自然舒绶的大理石纹理，富丽纹理线条特点的花纹，给人们一种自然浑厚、色彩华丽的视觉感受，为现代的家居生活创造了自由奔放、精致奢华的空间效果。', NULL, NULL, '意大利', 0, NULL, NULL, NULL),
(251, NULL, '2018-11-08 09:25:04', '至尊玛瑙', NULL, 19, NULL, '至尊玛瑙将石材的晶莹剔透应用到生活场景中，纹理的幻化层叠感让整体空间更华丽浪漫。凹凸的碎花花片的搭配，更体现对细精致的追求。', NULL, NULL, '土耳其', 0, NULL, NULL, NULL),
(252, NULL, '2018-11-08 09:25:07', '卡芙诺浅灰', NULL, 19, NULL, '卡芙诺浅灰取材自法国珍稀大理石，将卡芙诺石材的低调大气之美与极致的陶瓷工艺相结合，造就了灰色调的别样美，造就了空间独一无二的时尚舒适体验。', NULL, NULL, '法国', 0, NULL, NULL, NULL),
(253, NULL, '2018-11-08 09:25:09', '卡芙诺深灰', NULL, 19, NULL, '灰底杂白，层次分明，搭配水珠状的黑灰色，令空间变得灵动可触。纹路虽无规则但不夸张，白色渗入灰底中，单纯的灰白两色过渡自然，相互相容，给人和谐自然舒适之感。', NULL, NULL, NULL, 0, NULL, NULL, NULL),
(254, NULL, '2018-11-08 09:25:12', '极品寒江雪', NULL, 19, NULL, '细腻流畅的纹理在浑雄之中夹渣着几分闲雅，彰显无与伦比的包容力和无限的暇想空间。自然深刻的质感与浑然一体灵动多变的纹理弥足珍贵，释放着自由不羁与豪放俊逸。', NULL, NULL, '土耳其', 0, NULL, NULL, NULL),
(255, NULL, '2018-11-08 09:25:15', '青花瓷', NULL, 19, NULL, '青花瓷，如点墨滴于纸上天下，如梨花，纷飞飘洒。精妙，如光辉倾于天下，卡帝朗青花不饰张扬的美感，更显极简风的深度与境界，深浅变化不大，但非常细腻，具有珍稀的青花瓷底蕴。', NULL, NULL, '中国', 0, NULL, NULL, NULL),
(256, NULL, '2018-11-08 09:25:18', '拿铁', NULL, 20, NULL, '米黄色的底纹中镶嵌着白白色块状花纹及褐色细细线条，深浅颜色过渡自然，色彩柔和且层次强烈，绚丽多姿而富有变化。层次丰富的纹理特性，让拿铁米黄装点出高雅的艺术空间，给人宽宽敝、明亮的视觉效果。', NULL, NULL, '土耳其', 0, NULL, '', NULL),
(257, NULL, '2018-11-08 09:25:23', '古典米黄', NULL, 20, NULL, '古典米黄光泽柔美，极具层次感和立体感，色彩柔和，自然逼真，纹理依托现代先进工艺，将自然光泽及天然纹理融入产品，承袭大理石装饰精髓，融入人与自然的情感元素，散发着时代的经典。', NULL, NULL, '土耳其', 0, NULL, '', NULL),
(258, NULL, '2018-11-08 09:25:25', '罗马灰', NULL, 20, NULL, '罗马灰，色泽优雅，层次分明，立体感强，纹理清晰自然，似山又似雾，天生具有一种低调的奢华。静谧而灵动，稳重而又含蓄，让空间在安静、优雅、柔和中又彰显一种不一样的气度。', NULL, NULL, '意大利', 0, NULL, '', NULL),
(259, NULL, '2018-11-08 09:25:30', '普佩斯浅灰', NULL, 20, NULL, '普佩斯独有的浅灰色时尚，流畅大气，纹理自然灵动，简洁大气，闪电般的裂纹游离于砖面，带来强烈的视觉冲击力，与生俱来的自然气息，硬朗简单，自然立体，在石材界中独树一帜。', NULL, NULL, '意大利', 0, NULL, '', NULL),
(260, NULL, '2018-11-08 09:25:33', '普佩斯深灰', NULL, 20, NULL, '以天然珍稀石材为蓝本，深度还原名贵大理石纹理，普佩斯深灰大理石，产品纹理清晰自然，呈现逼真石材效果，深灰色泽沉稳大气，低调而有内涵，流淌着繁华落尽后的宁静与悠然。', NULL, NULL, '意大利', 0, NULL, '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cn_imgclass`
--
ALTER TABLE `cn_imgclass`
  ADD PRIMARY KEY (`ids`);

--
-- Indexes for table `cn_menu`
--
ALTER TABLE `cn_menu`
  ADD PRIMARY KEY (`ids`);

--
-- Indexes for table `cn_product`
--
ALTER TABLE `cn_product`
  ADD PRIMARY KEY (`ids`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cn_imgclass`
--
ALTER TABLE `cn_imgclass`
  MODIFY `ids` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5972;
--
-- 使用表AUTO_INCREMENT `cn_menu`
--
ALTER TABLE `cn_menu`
  MODIFY `ids` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- 使用表AUTO_INCREMENT `cn_product`
--
ALTER TABLE `cn_product`
  MODIFY `ids` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=349;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
