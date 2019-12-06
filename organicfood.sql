-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 192.168.27.54
-- 產生時間： 2019 年 12 月 03 日 02:03
-- 伺服器版本： 5.5.65-MariaDB
-- PHP 版本： 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `organicfood`
--

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

CREATE TABLE `account` (
  `sid` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `sex` int(11) NOT NULL,
  `birth` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` varchar(255) DEFAULT NULL,
  `login` int(11) DEFAULT NULL,
  `logintime` datetime NOT NULL,
  `jointime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `address_change`
--

CREATE TABLE `address_change` (
  `address_change_id` int(11) UNSIGNED NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `receiver` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `address_change`
--

INSERT INTO `address_change` (`address_change_id`, `customer_information`, `nickname`, `receiver`, `phone`, `address`) VALUES
(1, 1, '阿爸', '金城武', '0936594236', '台北市中山區'),
(2, 1, '阿母', '林志玲', '0956236987', '台南市'),
(19, 1, 'ertgresg', 'regerg', '5014810880', 'ergsgseges');

-- --------------------------------------------------------

--
-- 資料表結構 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `mobile`, `nickname`, `color`, `created_at`) VALUES
(1, 'sunny', 'sunnylo@gmail.com', '1234', '0939785545', 'Sunny', '[\"white\",\"danger\"]', '2019-08-30 17:13:32'),
(2, 'wendy', 'bolabola721@gmail.com', 'admin', '0929910721', 'wendy', '[\"white\",\"info\"]', '2019-09-02 13:13:00'),
(3, 'hao', 'oceanlintai@gmail.com', '123321', NULL, 'hao', '[\"white\",\"primary\"]', '2019-09-02 00:00:00'),
(4, 'Bacca', 'd83715@gmail.com', '1234', '0980958459', 'Bacca', NULL, '2019-09-02 14:06:00'),
(5, 'paul', 'paulpaul456@yahoo.com.tw', '0000', '0931683998', 'paul', NULL, '2019-09-13 00:00:00'),
(7, 'paul', 'paulpaul456@yahoo.com', '0000', '0931683998', 'paul', NULL, '2019-09-13 00:00:00'),
(8, 'LOLO', 'lolo19920228@gmail.com', '1234', '0939330523', 'LOLO', '[\"black\",\"success\"]', '2019-09-13 00:00:00'),
(9, 'wade', 'wade1220@gmail.com', '1234', '0912345678', 'wade', '[\"white\",\"info\"]', '2019-09-13 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `class_room`
--

CREATE TABLE `class_room` (
  `room_sid` int(11) UNSIGNED NOT NULL,
  `country_sid` int(11) DEFAULT NULL,
  `room_images` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `cost` varchar(200) NOT NULL,
  `contain` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `class_room`
--

INSERT INTO `class_room` (`room_sid`, `country_sid`, `room_images`, `name`, `phone`, `cost`, `contain`, `address`, `lat`, `lng`) VALUES
(1, 1, 'my_images/room_images/I4w6yA9D.jpg', '西門成都', '02-2331-3366', '2200', '30人以內', '台北市萬華區成都路117號2樓', 25.043358, 121.503953),
(2, 6, 'my_images/room_images/iWy93l4e.jpg', '環球板橋教室', '02-2966-0321', '2800', '10人以內', '新北市板橋區縣民大道二段7號2樓', 25.014468, 121.463857),
(3, 2, 'my_images/room_images/FwrcYyEi.jpg', '北車懷寧 ', '02-2926-6839', '1300', '10人以內', '台北市中正區懷寧街17號2樓之4', 25.045772, 121.514342),
(4, 7, 'my_images/room_images/wvO7KW0I.jpg', '永和頂溪 ', '02-2926-6839', '1800', '20人以內', '新北市永和區永和路二段201號12樓', 25.014024, 121.515371),
(5, 3, 'my_images/room_images/H9c5d6df.jpg', '台北101旗艦教室 ', '02-8101-7811', '2200', '20人以內', '台北市信義區信義路五段7號5樓', 25.034119, 121.564451),
(6, 4, 'my_images/room_images/IDhN02J5.jpg', '南港教室 ', '02-2651-2611', '2500', '20人以內', '台北市南港區經貿二路66之3號1F', 25.057485, 121.616006),
(7, 5, 'my_images/room_images/z1QW0n90.jpg', '大葉高島屋教室 ', '02-2836-3171', '2000', '30人以內', '台北市士林區忠誠路二段55號B1', 25.111846, 121.531522),
(8, 8, 'my_images/room_images/wK844Daz.jpg', '禾沐生活學苑 ', '04-2258-8828', '2100', '20人以內', '台中市西屯區朝富路30號2樓', 24.167114, 120.637755),
(9, 9, 'my_images/room_images/2o3IlYS3.jpg', '漫廚廚藝教室 ', '04-2310-0796', '1600', '30人以內', '台中市西區東興路三段152號3樓', 24.149732, 120.653181),
(10, 10, 'my_images/room_images/967g7mo7.jpg', '瑞輝烹飪教室 ', '04-2213-0356', '2000', '30人以內', '台中市東區三賢街215號', 24.145381, 120.707665),
(11, 11, 'my_images/room_images/OwB6hfD9.jpg', '做做手藝 ', '07-724-8768', '1300', '30人以內', '高雄市苓雅區四維二路104號3樓', 22.621976, 120.317906),
(12, 10, '', '樂樂', '07-1111-11', '1500', '20', '屏東市民權里', 0, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `country`
--

CREATE TABLE `country` (
  `country_sid` int(11) NOT NULL,
  `city` varchar(15) NOT NULL,
  `dist` varchar(15) NOT NULL,
  `Orientation` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `country`
--

INSERT INTO `country` (`country_sid`, `city`, `dist`, `Orientation`) VALUES
(1, '台北市', '萬華區', '北'),
(2, '台北市', '中正區', '北'),
(3, '台北市', '信義區', '北'),
(4, '台北市', '南港區', '北'),
(5, '台北市', '士林區', '北'),
(6, '新北市', '板橋區', '北'),
(7, '新北市', '永和區', '北'),
(8, '台中市', '西屯區', '中'),
(9, '台中市', '西區', '中'),
(10, '台中市', '東區', '中'),
(11, '高雄市', '苓雅區', '南');

-- --------------------------------------------------------

--
-- 資料表結構 `course`
--

CREATE TABLE `course` (
  `course_id` int(11) UNSIGNED NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `restaurant_id` int(11) DEFAULT NULL,
  `room_sid` int(10) NOT NULL,
  `course_date` date NOT NULL,
  `course_time` text NOT NULL,
  `price` smallint(10) NOT NULL DEFAULT '2000',
  `course_number_limit` int(11) NOT NULL,
  `course_content` text,
  `course_note` text,
  `my_file` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `course`
--

INSERT INTO `course` (`course_id`, `course_name`, `restaurant_id`, `room_sid`, `course_date`, `course_time`, `price`, `course_number_limit`, `course_content`, `course_note`, `my_file`, `created_at`) VALUES
(1, '俄羅斯料理', 3, 1, '2019-12-05', '早上', 2000, 25, '世界料理課程 俄羅斯料理.燉高麗菜捲.俄式炸麵包.甜菜根羅宋湯.馬鈴薯佐酸奶油*學習重點 - .高麗菜捲備料注意與技巧學習.肉餡調配與揉捏技巧.從麵粉開始製作麵包麵團.了解基礎原理與柔面手法.麵包整形與油炸技巧.甜菜根認識與應用變化', '**本課程使用牛肉**', '89fb27f4e6621ff6085deb3b777d70ad6c06112c.jpg', '2019-08-27 16:24:00'),
(2, '秋風洋食拼盤', 3, 2, '2019-12-19', '下午', 2500, 20, '時令主題課程 秋風洋食拼盤.手作漢堡排佐燉牛肉醬汁.番紅花鍋煮飯.煙燻鮭魚沙拉.清爽柳橙果凍*學習重點 - .日式漢堡排的製作技巧與食材.絞肉抓捏出黏性的判斷方式.百搭紅酒牛肉燉醬的做法.鍋煮飯的小技巧與判斷方式.吉利丁的使用方式學習', '**本課程使用牛肉**', '26a43c3a91d3e15ce40371549693998886c8549f.jpg', '2019-08-27 16:26:00'),
(3, '英格蘭料理', 3, 3, '2019-12-17', '晚上', 2100, 15, '世界料理課程 英格蘭料理.香烤牛排佐巴薩米克醋醬.鮮綠沙拉.麵包奶油蕃茄湯.迷你莓果奶油蛋糕*學習重點 - .烤牛肉(Roast beef)基本步驟認識.巴薩米克醋應用變化.麵包的基本食材、揉麵手法、發酵方式學習認識.濃湯的變化學習.海綿蛋糕製作技巧', '**本課程使用牛肉**', '1692ca9db76adab78b0ffb2dd6048eb65b46c5fe.jpg', '2019-08-27 16:31:00'),
(4, '泰式料理', 6, 4, '2020-01-09', '下午', 2000, 25, '世界料理課程 泰式料理.打拋豬肉飯.豆乳綠咖哩湯.鳳梨莫希托果凍*學習重點 - .打拋豬的基礎調味認識.綠咖哩醬的簡易應用.MOJITO無酒精甜點變化', '**本課程使用蝦**', '74636576d03deb950e457a3e67ac636f5ce45320.jpg', '2019-08-27 16:33:00'),
(5, '義大利手工麵疙瘩', 6, 5, '2019-12-22', '下午', 2200, 20, '時令主題課程 義大利手工麵疙瘩.手工義式麵疙瘩.雙重起士醬汁.蕃茄燉肉丸.紫洋蔥沙拉佐野菜沙拉醬.生巧克力布丁*學習重點 - .認識義大利麵疙瘩(Gnocchi)及其口感，學習完整的製作方式與食材內容.粉吹芋的製作與判斷方式.起士醬汁的加熱溫度控制.絞肉黏性抓捏判斷.吉利丁的使用方式學習', '**本課程使用牛肉**', 'ca5b93446988df67d2bdd36def8f664f7359f968.jpg', '2019-08-27 16:39:00'),
(6, '萬聖節餐桌', 6, 5, '2019-12-24', '晚上', 2500, 20, '時令主題課程 萬聖節餐桌.萬聖節烤雞腿.南瓜燈籠.木乃伊香腸.卡門貝爾起士燉飯.紫芋巧克力可麗餅*學習重點 - .帶骨雞腿肉的處理與塑形技巧.燉飯製作與調理技巧.萬聖節料理的造型學習與變化.可麗餅皮與卡士達的製作與應用', '', '99f49b4a1f8323e8172b697e2ad93d20d3f1ac47.jpg', '2019-08-27 16:41:00'),
(7, '鯖魚味噌煮', 6, 6, '2019-12-14', '下午', 2800, 25, '基礎技巧課程 鯖魚味噌煮.鯖魚味噌煮白飯.牛蒡金平肉末燉南瓜.豆皮拌季節青蔬*學習重點 - .學習鯖魚將鯖魚去腥，並燉煮入味.利用技巧讓南瓜燉的既能柔軟入味，又能維持外型.鹹甜風味的日式家常小菜，涼了也好吃.用調味過的高湯去煮蔬菜，口味清爽', '', '093c16f6c0eae9f48f60183823553236386cd024.jpg', '2019-08-27 16:50:00'),
(8, '鋼棍謝師傅招牌-黃金開口笑', 7, 7, '2019-12-11', '早上', 2000, 5, '電視主題課程 黃金開口笑\r\n.炸包子，在包子中開了個口似笑臉.中間有冬粉和牛肉.因為其色澤金黃.且能發出笑聲，故稱為黃金開口笑*學習重點 - .利用技巧讓包子既能柔軟入味，又能維持外型.外酥內軟的風味涼了也好吃.用熬煮過的高湯去燉煮牛肉，口味清爽', '**本課程使用牛肉**', 'f1cb52dd6ba8058c91a8a3d00ca0f70add852318.jpg', '2019-08-28 15:41:32'),
(9, '小當家拿手菜-升龍餃子', 7, 7, '2019-12-20', '早上', 2150, 15, '電視主題課程 升龍餃子.用蝦肉做陷，蝦殼雕刻成龍頭狀.特點是利用了小麥和燕麥兩種餃子皮.加熱後利用膨脹度不同使餃子形成樹立感，如同升龍.關鍵是在陷裏面加了蝦腦髓，因此特別美味*學習重點 - .餃肉的處理與塑形技巧.麵皮的製作與加熱拿捏.擺盤與顏色搭配的學習', '**膽固醇很高非常高**', '5189f94af895ac4a9d50da32fc0b13c317ac70e1.jpg', '2019-08-28 15:52:14'),
(10, '食神菜色-黯然銷魂飯', 7, 8, '2019-12-12', '晚上', 2000, 25, '電視主題課程 黯然銷魂飯.《食神》否定了一般人崇敬的傳統高貴菜餚如佛跳牆.肯定了只為生活煮出的平民菜.如叉燒煎蛋飯，很大程度上來自情感的滲入.遠遠脫離了食物的本身，這就是黯然消魂飯.*學習重點 - .叉燒的基礎認識.荷包蛋完美煎法.醬汁的調配學習', '**是洋蔥，加了洋蔥！**', 'fbb3f99cd90166af842d6bf931057505abb44edc.jpg', '2019-08-28 15:58:23'),
(12, '食神菜色-黯然銷魂飯', 7, 8, '2020-01-06', '晚上', 2000, 25, '電視主題課程 黯然銷魂飯.《食神》否定了一般人崇敬的傳統高貴菜餚如佛跳牆.肯定了只為生活煮出的平民菜.如叉燒煎蛋飯，很大程度上來自情感的滲入.遠遠脫離了食物的本身，這就是黯然消魂飯.*學習重點 - .叉燒的基礎認識.荷包蛋完美煎法.醬汁的調配學習', '**是洋蔥，加了洋蔥！**', 'fbb3f99cd90166af842d6bf931057505abb44edc.jpg', '2019-08-28 16:00:23'),
(13, '食神菜色-黯然銷魂飯', 7, 8, '2019-12-31', '晚上', 2000, 25, '電視主題課程 黯然銷魂飯.《食神》否定了一般人崇敬的傳統高貴菜餚如佛跳牆.肯定了只為生活煮出的平民菜.如叉燒煎蛋飯，很大程度上來自情感的滲入.遠遠脫離了食物的本身，這就是黯然消魂飯.*學習重點 - .叉燒的基礎認識.荷包蛋完美煎法.醬汁的調配學習', '**是洋蔥，加了洋蔥！**', 'fbb3f99cd90166af842d6bf931057505abb44edc.jpg', '2019-08-28 16:00:23'),
(14, '食神菜色-黯然銷魂飯', 7, 8, '2020-01-14', '晚上', 2000, 25, '電視主題課程 黯然銷魂飯.《食神》否定了一般人崇敬的傳統高貴菜餚如佛跳牆.肯定了只為生活煮出的平民菜.如叉燒煎蛋飯，很大程度上來自情感的滲入.遠遠脫離了食物的本身，這就是黯然消魂飯.*學習重點 - .叉燒的基礎認識.荷包蛋完美煎法.醬汁的調配學習', '**是洋蔥，加了洋蔥！**', 'fbb3f99cd90166af842d6bf931057505abb44edc.jpg', '2019-08-28 16:00:23'),
(15, '食神菜色-黯然銷魂飯', 7, 8, '2019-12-23', '晚上', 2000, 25, '電視主題課程 黯然銷魂飯.《食神》否定了一般人崇敬的傳統高貴菜餚如佛跳牆.肯定了只為生活煮出的平民菜.如叉燒煎蛋飯，很大程度上來自情感的滲入.遠遠脫離了食物的本身，這就是黯然消魂飯.*學習重點 - .叉燒的基礎認識.荷包蛋完美煎法.醬汁的調配學習', '**是洋蔥，加了洋蔥！**', 'fbb3f99cd90166af842d6bf931057505abb44edc.jpg', '2019-08-28 16:00:23'),
(22, '好棒棒熱炒組合-蔥爆牛肉與蝦仁烘蛋', 7, 2, '2020-01-02', '晚上', 2000, 22, '熱炒主題課程 蝦仁烘蛋與蔥爆牛肉.鯖魚味噌煮白飯.牛蒡金平肉末燉南瓜.豆皮拌季節青蔬*學習重點 - .學習鯖魚將鯖魚去腥，並燉煮入味.利用技巧讓南瓜燉的既能柔軟入味，又能維持外型.鹹甜風味的日式家常小菜，涼了也好吃.用調味過的高湯去煮蔬菜，口味清爽', '**本課程使用牛肉**', '784600b465fe423e9d20313e38e800ebc15a092d.jpg', '2019-08-29 14:45:43'),
(29, '鋼棍謝師傅招牌-黃金開口笑', 1142, 1, '2019-12-06', '早上', 2000, 5, '電視主題課程 黃金開口笑\r\n.炸包子，在包子中開了個口似笑臉.中間有冬粉和牛肉.因為其色澤金黃.且能發出笑聲，故稱為黃金開口笑*學習重點 - .利用技巧讓包子既能柔軟入味，又能維持外型.外酥內軟的風味涼了也好吃.用熬煮過的高湯去燉煮牛肉，口味清爽', '**本課程使用牛肉**', '765e34255f23d238b7e09f8cf7c39d51aa6b77fc.jpg', '2019-08-30 16:43:55'),
(30, '好棒棒熱炒組合-蔥爆牛肉與蝦仁烘蛋', 7, 1, '2019-12-07', '早上', 2000, 5, '熱炒主題課程 蝦仁烘蛋與蔥爆牛肉.鯖魚味噌煮白飯.牛蒡金平肉末燉南瓜.豆皮拌季節青蔬*學習重點 - .學習鯖魚將鯖魚去腥，並燉煮入味.利用技巧讓南瓜燉的既能柔軟入味，又能維持外型.鹹甜風味的日式家常小菜，涼了也好吃.用調味過的高湯去煮蔬菜，口味清爽', '**本課程使用牛肉**', '2aa0bfa91a14f422f2ff450d608d1125981ff9eb.jpg', '2019-08-30 16:58:18'),
(31, '好棒棒熱炒組合-蔥爆牛肉與蝦仁烘蛋', 7, 1, '2019-12-30', '早上', 2000, 5, '熱炒主題課程 蝦仁烘蛋與蔥爆牛肉.鯖魚味噌煮白飯.牛蒡金平肉末燉南瓜.豆皮拌季節青蔬*學習重點 - .學習鯖魚將鯖魚去腥，並燉煮入味.利用技巧讓南瓜燉的既能柔軟入味，又能維持外型.鹹甜風味的日式家常小菜，涼了也好吃.用調味過的高湯去煮蔬菜，口味清爽', '**本課程使用牛肉**', '784600b465fe423e9d20313e38e800ebc15a092d.jpg', '2019-08-30 16:58:53');

-- --------------------------------------------------------

--
-- 資料表結構 `course_cart`
--

CREATE TABLE `course_cart` (
  `course_cart_id` int(10) NOT NULL,
  `main_cart` int(10) UNSIGNED NOT NULL,
  `course` int(10) UNSIGNED NOT NULL,
  `class_room` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) NOT NULL,
  `status` varchar(255) CHARACTER SET utf8 NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `course_cart`
--

INSERT INTO `course_cart` (`course_cart_id`, `main_cart`, `course`, `class_room`, `quantity`, `status`, `create_at`) VALUES
(60, 1, 12, 8, 1, '收藏中', '2019-11-28 16:17:53'),
(61, 1, 1, 1, 1, '收藏中', '2019-11-28 16:18:00'),
(70, 1, 3, 3, 1, '收藏中', '2019-12-01 16:02:57'),
(71, 2, 3, 3, 1, '收藏中', '2019-12-02 15:03:12'),
(73, 2, 6, 5, 1, '收藏中', '2019-12-02 17:09:21'),
(77, 2, 1, 1, 1, '購物中', '2019-12-02 18:00:27');

-- --------------------------------------------------------

--
-- 資料表結構 `course_comment`
--

CREATE TABLE `course_comment` (
  `course_comment_id` int(11) NOT NULL,
  `course` int(10) UNSIGNED NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `like` int(10) UNSIGNED NOT NULL,
  `unlike` int(10) UNSIGNED NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

-- --------------------------------------------------------

--
-- 資料表結構 `course_order`
--

CREATE TABLE `course_order` (
  `course_order_id` int(11) NOT NULL,
  `main_order` int(10) UNSIGNED NOT NULL,
  `course` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `course_order`
--

INSERT INTO `course_order` (`course_order_id`, `main_order`, `course`, `quantity`) VALUES
(38, 110, 1, 2),
(40, 111, 1, 2),
(42, 112, 1, 2),
(44, 113, 1, 2),
(46, 114, 1, 2),
(48, 115, 1, 2),
(50, 116, 1, 2),
(51, 116, 1, 2),
(52, 117, 1, 2),
(54, 118, 3, 1),
(55, 119, 3, 1),
(56, 120, 7, 1),
(57, 121, 7, 1),
(58, 122, 1, 1),
(59, 123, 1, 1),
(64, 129, 2, 1),
(65, 129, 6, 1),
(66, 129, 3, 1),
(67, 129, 9, 1),
(68, 130, 2, 1),
(69, 130, 6, 1),
(70, 130, 9, 1),
(71, 130, 3, 1),
(72, 141, 3, 1),
(73, 142, 3, 1),
(74, 143, 2, 1),
(75, 144, 2, 1),
(76, 145, 3, 1),
(77, 145, 7, 1),
(78, 146, 7, 1),
(79, 146, 3, 1),
(80, 147, 7, 1),
(81, 148, 7, 1),
(82, 153, 4, 1),
(83, 154, 4, 1),
(84, 155, 3, 1),
(85, 156, 3, 1),
(86, 157, 3, 1),
(87, 158, 6, 1),
(88, 159, 6, 1),
(89, 160, 7, 1),
(90, 161, 7, 1),
(91, 162, 2, 1),
(92, 163, 4, 1),
(93, 164, 4, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `customer_coupon`
--

CREATE TABLE `customer_coupon` (
  `customer_coupon_id` int(11) NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `pm_event` int(10) UNSIGNED NOT NULL,
  `nam` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `customer_coupon`
--

INSERT INTO `customer_coupon` (`customer_coupon_id`, `customer_information`, `pm_event`, `nam`) VALUES
(18, 1, 50, 1),
(22, 1, 53, 1),
(24, 1, 53, 1),
(26, 1, 52, 1),
(27, 1, 51, 1),
(28, 1, 53, 1),
(29, 1, 53, 1),
(30, 1, 53, 1),
(31, 1, 50, 1),
(32, 1, 52, 1),
(33, 1, 50, 1),
(34, 1, 50, 1),
(35, 1, 50, 1),
(38, 1, 51, 1),
(40, 2, 52, 1),
(41, 2, 52, 1),
(42, 2, 53, 1),
(43, 2, 53, 1),
(44, 2, 50, 1),
(45, 2, 53, 1),
(46, 2, 52, 1),
(47, 2, 50, 1),
(48, 2, 52, 1),
(49, 2, 50, 1),
(50, 2, 50, 1),
(51, 2, 52, 1),
(52, 1, 53, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `customer_information`
--

CREATE TABLE `customer_information` (
  `customer_id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `about_me` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `my_file` varchar(3000) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `customer_information`
--

INSERT INTO `customer_information` (`customer_id`, `name`, `email`, `password`, `mobile`, `birthday`, `address`, `about_me`, `nickname`, `gender`, `my_file`, `created_at`) VALUES
(1, '彭于晏', '123@gmail.com', 'a123456', '0918168168', '2019-11-12', '台北市大安區大安路大安里168號', '大家好，我是彭于晏，彭于晏的彭，彭于晏的于，彭于晏的彥，請多多指教。', '中山彭于晏', '男', 'photo.jpg', '2019-11-01 00:00:00'),
(2, '小美2', '456@gmail.com', 'b123456', '0934567890', '2019-11-08', '台北市中山區中山里中山路999號', '大家好我是小美2，請多多指教', '美美', '女', '1_161230185104_1.jpg', '2019-11-09 00:00:00'),
(3, '小美3', '789@gmail.com', 'c123456', '0911111111', '1983-10-10', '台北市中山區中山里中山路999號', '我是小美美 請多指教', '美美美', '女', '154.jpg', '2019-11-10 10:00:45'),
(5, '善善', '234@gmail.com', 'd123456', '0911111111', '1990-01-05', '台北市中山區中山里中山路999號', '人之初性本善', 'NENO', '女', 'images.jpg', '2019-11-05 00:00:00'),
(15, '金城武', '55555@gmail.com', 'ff123456', '09222222222', '1975-11-14', '台北市中山區中山里中山路999號', 'Aniki', 'Aniki', '男', '55.jpg', '2019-10-14 00:00:00'),
(21, '星城武', '55555555@gmail.com', 'lkk123456', '0922222222', '1975-11-14', '台北市中山區中山里中山路999號', 'Aniki2', 'Aniki2', '男', '5082647101487.jpg', '2019-11-03 00:00:00'),
(23, '王曉明', 'drfsg@gmail.com', 'aaa123456', '09000000000', '1988-04-23', '台北市中山區中山里中山路999號', 'null', '王曉明', '男', '000000.jpg', '2019-10-30 00:00:00'),
(30, '球', 'bolabola721@gmail.com', '123456rr', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(33, 'wade', 'weijung771220@gmail.com', '123456jj', '0910123456', '2019-12-10', '台北市中山區中山路168號', '大家好我是wade，請多多指教', '偉德', '男', NULL, '2019-12-02 00:00:00'),
(42, '金城武', '555@gmail.com', '123456aa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `dinnerproduct`
--

CREATE TABLE `dinnerproduct` (
  `sid` int(11) NOT NULL,
  `product_category` int(10) UNSIGNED NOT NULL,
  `product_class` int(10) UNSIGNED NOT NULL,
  `farmer_product` int(11) UNSIGNED NOT NULL,
  `dinner_list` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `dinnerproduct`
--

INSERT INTO `dinnerproduct` (`sid`, `product_category`, `product_class`, `farmer_product`, `dinner_list`) VALUES
(1, 5, 11, 171, 3),
(2, 6, 30, 171, 3),
(3, 5, 51, 49, 97),
(4, 6, 31, 171, 98),
(5, 5, 55, 176, 122),
(6, 5, 51, 49, 122),
(7, 9, 54, 102, 122),
(8, 12, 78, 148, 122),
(9, 5, 53, 50, 122),
(10, 5, 51, 49, 123),
(11, 5, 18, 171, 123),
(12, 4, 1, 171, 125),
(13, 4, 1, 171, 126),
(14, 4, 51, 49, 127),
(15, 4, 1, 171, 129),
(16, 9, 55, 175, 124),
(17, 9, 55, 178, 128),
(18, 9, 55, 178, 130),
(19, 5, 76, 68, 122);

-- --------------------------------------------------------

--
-- 資料表結構 `dinner_list`
--

CREATE TABLE `dinner_list` (
  `dinner_id` smallint(11) UNSIGNED NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `main_cat` text,
  `small_cat` text NOT NULL,
  `name` varchar(15) NOT NULL,
  `brief_intro` varchar(12) NOT NULL,
  `intro` varchar(30) NOT NULL,
  `other_ingred` varchar(255) DEFAULT NULL,
  `dinner_image` varchar(255) NOT NULL,
  `veg_type` varchar(255) DEFAULT NULL,
  `spicy` int(11) NOT NULL,
  `onboard` varchar(255) DEFAULT NULL,
  `flavor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `dinner_list`
--

INSERT INTO `dinner_list` (`dinner_id`, `restaurant_id`, `main_cat`, `small_cat`, `name`, `brief_intro`, `intro`, `other_ingred`, `dinner_image`, `veg_type`, `spicy`, `onboard`, `flavor`) VALUES
(3, 1, '西式', '主菜', '卜派鮮嫩雞胸義大利麵', '這間好吃', '帶點酸酸的口感，吃了之後跟卜派一樣活力一整天。', NULL, '[\"cc2e579937fcc1469f64ad61437f8b9b.png\"]', '全素', 0, NULL, '紅醬'),
(97, 2, '西式', '主菜', '紅油抄手(菜肉)', '這間好吃', 'EEEEE', NULL, '[\"806665909b2a46d0b2e0a3f5a1145663.png\",\"9202cdf0b731ed0b200b5a7013cdc179.png\",\"c393a21abce351cdfd6b310651da871b.png\"]', '素食', 0, '0', '紅醬'),
(98, 2, '西式', '主菜', '紅燒牛肉麵', '這間好吃', 'RRRR', NULL, '[\"6f62506a98c808d23c61ad768f33956c.png\",\"1389f058c6d566834b3b3edfe61941b3.png\"]', '葷食', 0, '0', '清蒸'),
(122, 1, '西式', '主食', '煙燻鴨胸波菜奶油燉飯', '這間好吃', 'ttttttt', '[\"36\",\"42\",\"41\"]', '[\"97b3fc7692b88d448996294246ef17ab.png\",\"9badd2a77c7f315e879b13c5fa3c68a7.png\",\"47e1a41b98b7e978ea38bc1baf5928c5.png\"]', '葷食', 0, NULL, '白醬'),
(123, 1, '西式', '主食', '乳酪青醬義大利麵', '這間好吃', '1111', NULL, '[\"a990f4f4ef4bd4917627f22fc9f55071.png\"]', '全素', 0, NULL, '青醬'),
(124, 1, NULL, '主食', '乳酪青醬雞胸義大利麵', '這間好吃', '1234561234561234561234512', '[\"36\",\"60\",\"69\"]', '[\"f417533ee902c0a66daa29d739a3c315.png\"]', '全素', 1, '上架中', '青醬'),
(125, 1, NULL, '主食', '乳酪蛋黃培根義大利麵', '這間好吃', '123456', '[\"36\",\"60\",\"69\"]', '[\"6ef72107f4da9630eb0f7399d9de7ced.png\"]', '蛋奶素', 0, '上架中', '白醬'),
(126, 1, NULL, '主食', '乳酪蛋黃雞胸義大利麵', '這間好吃', '123456', '[\"36\",\"60\",\"69\"]', '[\"187500a22127a6b9f121cacb902c64c9.png\"]', '全素', 1, '上架中', '白醬'),
(127, 1, NULL, '主食', '波隆那肉醬義大利麵', '這間好吃', '選我', '[\"36\",\"60\",\"69\"]', '[\"c4b46623496d9f8fdeed9a9669a6a60a.jpg\"]', '葷食', 2, '上架中', '白醬'),
(128, 1, NULL, '湯', '茄汁義大利麵', '這間好吃', '123456', '[\"36\",\"60\",\"69\"]', '[\"c4b46623496d9f8fdeed9a9669a6a60b.jpg\"]', '素食', 0, '上架中', '白醬'),
(129, 1, NULL, '湯', '宮保雞丁義大利麵', '這間好吃', '123456', '[\"36\",\"60\",\"69\"]', '[\"c4b46623496d9f8fdeed9a9669a6a60c.jpg\"]', '葷食', 0, '上架中', '白醬'),
(130, 1, NULL, '湯', '椒麻三點蟹義大利麵', '這間好吃', '123456', '[\"36\",\"60\",\"69\"]', '[\"c4b46623496d9f8fdeed9a9669a6a60d.jpg\"]', '葷食', 0, '上架中', '白醬'),
(131, 1, NULL, '甜點', '椒麻三點蟹義大利麵', '這間好吃', '123456', '[\"36\",\"60\",\"69\"]', '[\"c4b46623496d9f8fdeed9a9669a6a60e.png\"]', '葷食', 0, '上架中', '白醬');

-- --------------------------------------------------------

--
-- 資料表結構 `dn_goods_cart`
--

CREATE TABLE `dn_goods_cart` (
  `dn_goods_cart_id` int(11) NOT NULL,
  `main_cart` int(10) UNSIGNED NOT NULL,
  `restaurant` smallint(5) UNSIGNED NOT NULL,
  `dinner_list` smallint(5) UNSIGNED NOT NULL,
  `product_class` int(10) UNSIGNED NOT NULL,
  `farmer_product` int(10) UNSIGNED NOT NULL,
  `special_request` varchar(255) DEFAULT NULL,
  `spicy` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `book_weekday` date DEFAULT NULL,
  `book_time` varchar(255) DEFAULT NULL,
  `person` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `create_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `dn_goods_cart`
--

INSERT INTO `dn_goods_cart` (`dn_goods_cart_id`, `main_cart`, `restaurant`, `dinner_list`, `product_class`, `farmer_product`, `special_request`, `spicy`, `quantity`, `book_weekday`, `book_time`, `person`, `status`, `create_at`) VALUES
(19, 1, 1, 122, 55, 176, '無', 0, 4, NULL, NULL, NULL, '收藏中', NULL),
(24, 1, 1, 126, 1, 171, '無', 1, 1, NULL, NULL, NULL, '收藏中', NULL),
(108, 1, 1, 122, 78, 148, '無', 3, 1, NULL, NULL, NULL, '收藏中', NULL),
(121, 1, 1, 122, 78, 155, 'mm', 2, 1, NULL, NULL, NULL, '收藏中', NULL),
(125, 1, 1, 122, 55, 176, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(126, 1, 1, 122, 78, 151, 'BBB', 3, 1, NULL, NULL, NULL, '收藏中', NULL),
(127, 1, 1, 122, 78, 151, 'BBB', 3, 1, NULL, NULL, NULL, '點餐中', NULL),
(128, 1, 1, 122, 78, 151, 'vvv', 3, 1, NULL, NULL, NULL, '點餐中', NULL),
(129, 1, 1, 122, 78, 151, 'vvv', 3, 1, NULL, NULL, NULL, '點餐中', NULL),
(130, 1, 1, 122, 55, 176, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(131, 1, 1, 122, 55, 176, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(132, 1, 1, 122, 55, 176, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(135, 1, 1, 125, 1, 171, '無', 0, 1, NULL, NULL, NULL, '收藏中', NULL),
(136, 1, 1, 127, 51, 49, '無', 2, 1, NULL, NULL, NULL, '點餐中', NULL),
(140, 2, 1, 122, 78, 151, '不要花生', 3, 1, NULL, NULL, NULL, '收藏中', NULL),
(146, 2, 1, 126, 1, 171, '無', 1, 1, NULL, NULL, NULL, '收藏中', NULL),
(149, 2, 1, 122, 55, 176, '無', 0, 1, NULL, NULL, NULL, '收藏中', NULL),
(156, 2, 1, 122, 55, 176, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(157, 2, 1, 125, 1, 171, '無', 0, 1, NULL, NULL, NULL, '收藏中', NULL),
(158, 2, 1, 125, 1, 171, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(159, 2, 2, 98, 31, 171, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(160, 2, 2, 97, 51, 49, '無', 0, 1, NULL, NULL, NULL, '點餐中', NULL),
(161, 2, 2, 97, 51, 49, '無', 0, 1, NULL, NULL, NULL, '收藏中', NULL),
(162, 2, 2, 98, 31, 171, '無', 0, 1, NULL, NULL, NULL, '收藏中', NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `dn_goods_comment`
--

CREATE TABLE `dn_goods_comment` (
  `dn_goods_comment_id` int(11) UNSIGNED NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `dinner_list` smallint(5) UNSIGNED NOT NULL,
  `stars` int(11) NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `create_at` datetime NOT NULL,
  `p_like` int(11) DEFAULT NULL,
  `p_dislike` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `dn_goods_comment`
--

INSERT INTO `dn_goods_comment` (`dn_goods_comment_id`, `customer_information`, `dinner_list`, `stars`, `comment`, `create_at`, `p_like`, `p_dislike`) VALUES
(1, 1, 122, 5, 'aaa', '2019-11-26 14:51:42', 1, 1),
(2, 1, 122, 5, 'bbb', '2019-11-26 16:31:00', NULL, NULL),
(3, 1, 123, 4, 'ccc', '2019-11-26 16:31:45', 1, NULL),
(4, 2, 3, 3, '普普', '2019-12-03 08:31:06', NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `dn_goods_order`
--

CREATE TABLE `dn_goods_order` (
  `dn_goods_order_id` int(11) NOT NULL,
  `main_order` int(10) UNSIGNED NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `dinner_list` smallint(5) UNSIGNED NOT NULL,
  `product_class` int(10) UNSIGNED NOT NULL,
  `farmer_product` int(10) UNSIGNED NOT NULL,
  `special_request` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `spicy` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `book_weekday` varchar(255) DEFAULT NULL,
  `book_time` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `person` varchar(255) NOT NULL,
  `create_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `dn_goods_order`
--

INSERT INTO `dn_goods_order` (`dn_goods_order_id`, `main_order`, `restaurant_id`, `dinner_list`, `product_class`, `farmer_product`, `special_request`, `spicy`, `quantity`, `book_weekday`, `book_time`, `person`, `create_at`) VALUES
(22, 139, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(23, 139, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(24, 140, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(25, 140, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(26, 141, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '17:00~20:00', '1', NULL),
(27, 142, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '17:00~20:00', '1', NULL),
(28, 143, 1, 122, 55, 176, '無', 0, 1, '2019-12-05T16:00:00.000Z', '17:00~20:00', '1', NULL),
(29, 144, 1, 122, 55, 176, '無', 0, 1, '2019-12-05T16:00:00.000Z', '17:00~20:00', '1', NULL),
(30, 145, 1, 122, 55, 176, '無', 0, 1, '2019-12-19T16:00:00.000Z', '17:00~20:00', '2', NULL),
(31, 145, 1, 122, 55, 176, '無', 0, 1, '2019-12-19T16:00:00.000Z', '17:00~20:00', '2', NULL),
(32, 146, 1, 122, 55, 176, '無', 0, 1, '2019-12-19T16:00:00.000Z', '17:00~20:00', '2', NULL),
(33, 146, 1, 122, 55, 176, '無', 0, 1, '2019-12-19T16:00:00.000Z', '17:00~20:00', '2', NULL),
(34, 147, 1, 122, 78, 176, '不要杏鮑菇', 3, 1, '2019-11-12T16:00:00.000Z', '45354', '3', NULL),
(35, 147, 1, 122, 55, 176, '無', 0, 1, '2019-12-05T16:00:00.000Z', '11:00~14:00', '1', NULL),
(36, 148, 1, 122, 78, 176, '不要杏鮑菇', 3, 1, '2019-11-12T16:00:00.000Z', '45354', '3', NULL),
(37, 148, 1, 122, 55, 176, '無', 0, 1, '2019-12-05T16:00:00.000Z', '11:00~14:00', '1', NULL),
(38, 151, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(39, 151, 1, 122, 78, 159, '不要杏包辜', 3, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(40, 152, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(41, 152, 1, 122, 78, 159, '不要杏包辜', 3, 1, '2019-12-12T16:00:00.000Z', '11:00~14:00', '1', NULL),
(42, 153, 1, 126, 1, 171, '無', 1, 1, '2019-11-12T16:00:00.000Z', '5', '2', NULL),
(43, 154, 1, 126, 1, 171, '無', 1, 1, '2019-11-12T16:00:00.000Z', '5', '2', NULL),
(44, 155, 1, 122, 55, 176, '無', 0, 1, '2019-12-12T16:00:00.000Z', '14:00~17:00', '1', NULL),
(45, 155, 1, 122, 78, 151, '不要花椰菜', 3, 6, '2019-12-12T16:00:00.000Z', '14:00~17:00', '1', NULL),
(46, 156, 1, 122, 78, 152, '不要挖椰菜', 3, 1, '2019-12-12T16:00:00.000Z', '17:00~20:00', '1', NULL),
(47, 157, 1, 122, 78, 152, '不要挖椰菜', 3, 1, '2019-12-12T16:00:00.000Z', '17:00~20:00', '1', NULL),
(48, 160, 1, 3, 11, 171, '無', 0, 1, '2019-12-19T16:00:00.000Z', '11:00~14:00', '1', NULL),
(49, 161, 1, 3, 11, 171, '無', 0, 1, '2019-12-19T16:00:00.000Z', '11:00~14:00', '1', NULL),
(50, 162, 1, 122, 55, 176, '無', 0, 1, '2019-12-19T16:00:00.000Z', '11:00~14:00', '1', NULL),
(51, 163, 1, 122, 55, 176, '無', 0, 2, '2019-12-19T16:00:00.000Z', '11:00~14:00', '1', NULL),
(52, 163, 1, 125, 1, 171, '無', 0, 1, '2019-12-19T16:00:00.000Z', '11:00~14:00', '1', NULL),
(53, 164, 1, 125, 1, 171, '無', 0, 1, '2019-12-19T16:00:00.000Z', '11:00~14:00', '1', NULL),
(54, 164, 1, 122, 55, 176, '無', 0, 2, '2019-12-19T16:00:00.000Z', '11:00~14:00', '1', NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `farmers`
--

CREATE TABLE `farmers` (
  `farmer_id` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `storename` varchar(255) DEFAULT NULL,
  `taxid` varchar(255) DEFAULT NULL,
  `fmname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `aboutme` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `status` int(10) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `farmers`
--

INSERT INTO `farmers` (`farmer_id`, `company`, `storename`, `taxid`, `fmname`, `email`, `password`, `telephone`, `mobile`, `address`, `nickname`, `aboutme`, `img`, `color`, `status`, `created_at`) VALUES
(5, 'farm25', 'OrganFood25', '26109455', '王力宏5', '1234@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', '[\"2d3347a52d3deec4c7d7d503abecd3c6.jpg\",\"59338d732af450aa5542b2883b5936f8.jpg\"]', NULL, 1, '2019-09-07 21:07:24'),
(7, 'farm27', 'OrganFood27', '26109457', '王力宏7', 'wang7@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:43:16'),
(9, 'farm29', 'OrganFood29', '26109459', '王力宏9', 'wang9@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 17:45:04'),
(11, 'farm211', 'OrganFood211', '261094511', '王力宏11', 'wang11@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:43:17'),
(12, 'farm212', 'OrganFood212', '261094512', '王力宏12', 'wang12@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:43:18'),
(13, 'farm213', 'OrganFood213', '261094513', '王力宏13', 'wang13@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:43:19'),
(14, 'farm214', 'OrganFood214', '261094514', '王力宏14', 'wang14@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:43:20'),
(15, 'farm215', 'OrganFood215', '261094515', '王力宏15', 'wang15@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:43:21'),
(16, 'farm216', 'OrganFood216', '261094516', '王力宏16', 'wang16@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:43:27'),
(17, 'farm217', 'OrganFood217', '261094517', '王力宏17', 'wang17@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 0, '2019-09-07 00:43:27'),
(18, 'farm218', 'OrganFood218', '261094518', '王力宏18', 'wang18@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:54:20'),
(19, 'farm219', 'OrganFood219', '261094519', '王力宏19', 'wang19@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:54:21'),
(20, 'farm220', 'OrganFood220', '261094520', '王力宏20', 'wang20@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:54:04'),
(21, 'farm221', 'OrganFood221', '261094521', '王力宏21', 'wang21@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:54:05'),
(22, 'farm222', 'OrganFood222', '261094522', '王力宏22', 'wang22@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:54:22'),
(23, 'farm223', 'OrganFood223', '261094523', '王力宏23', 'wang23@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 17:44:30'),
(24, 'farm224', 'OrganFood224', '261094524', '王力宏24', 'wang24@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:54:07'),
(25, 'farm225', 'OrganFood225', '261094525', '王力宏25', 'wang25@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 00:54:25'),
(26, 'farm226', 'OrganFood226', '261094526', '王力宏26', 'wang26@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:23'),
(27, 'farm227', 'OrganFood227', '261094527', '王力宏27', 'wang27@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:23'),
(28, 'farm228', 'OrganFood228', '261094528', '王力宏28', 'wang28@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:24'),
(29, 'farm229', 'OrganFood229', '261094529', '王力宏29', 'wang29@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 10:26:44'),
(30, 'farm230', 'OrganFood230', '261094530', '王力宏30', 'wang30@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:24'),
(31, 'farm231', 'OrganFood231', '261094531', '王力宏31', 'wang31@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 10:26:42'),
(32, 'farm232', 'OrganFood232', '261094532', '王力宏32', 'wang32@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:17'),
(33, 'farm233', 'OrganFood233', '261094533', '王力宏33', 'wang33@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:17'),
(34, 'farm234', 'OrganFood234', '261094534', '王力宏34', 'wang34@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:17'),
(35, 'farm235', 'OrganFood235', '261094535', '王力宏35', 'wang35@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:17'),
(36, 'farm236', 'OrganFood236', '261094536', '王力宏36', 'wang36@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:17'),
(37, 'farm237', 'OrganFood237', '261094537', '王力宏37', 'wang37@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:17'),
(40, 'farm240', 'OrganFood240', '261094540', '王力宏40', 'wang40@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:18'),
(41, 'farm241', 'OrganFood241', '26109454', '王力宏41', 'wang41@gmail.com', '12345678', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', '[\"cfc4078f6e8cca8578598a17e135db21.jpg\",\"5bf74d29538d7d803f629abb1601d8d5.jpg\"]', NULL, 1, '2019-09-06 16:37:46'),
(42, 'farm242', 'OrganFood242', '261094542', '王力宏42', 'wang42@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 17:32:16'),
(43, 'farm243', 'OrganFood243', '261094543', '王力宏43', 'wang43@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 16:44:18'),
(44, 'farm244', 'OrganFood244', '261094544', '王力宏44', 'wang44@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 10:24:11'),
(45, 'farm245', 'OrganFood245', '261094545', '王力宏45', 'wang45@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-07 10:26:37'),
(46, 'farm246', 'OrganFood246', '261094546', '王力宏46', 'wang46@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 17:21:59'),
(48, 'farm248', 'OrganFood248', '261094548', '王力宏48', 'wang48@gmail.com', '1234', '02-2322-1234', '0933444555', 'Taipei', 'wang', 'Aboutme', NULL, NULL, 1, '2019-09-06 17:21:59'),
(50, 'Farm1', 'PPP', '23456545', 'Sunny', 'ssss44@gmail.com', '1928485', '02-2233-2111', '0912555777', 'Taipei', 'wangyo0101', 'Aboutme', '[\"b7954daffb2ad14a41f175acdd8a9a9a.jpg\",\"9499df116ee745b7a9690851626734c1.jpg\"]', NULL, 1, '2019-09-06 17:21:57'),
(51, 'farmyoyo', NULL, NULL, 'Sunny', 'ss17s44@gmail.com', '1234', NULL, '0912555777', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 17:21:58'),
(54, 'Beatles', NULL, NULL, '黃小明50', 'sunny@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:19'),
(57, 'Beatles', NULL, NULL, 'beatles', '12345@gmail.com', '12345', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:20'),
(58, 'Beatles', NULL, NULL, 'beatles', '1357@gmail.com', '1357', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-07 10:24:05'),
(59, 'Beatles', NULL, NULL, 'beatles', '1sunny1@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:14'),
(62, 'Beatles', NULL, NULL, '黃小明50', 'sunny125@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:42:31'),
(66, 'Beatles', NULL, NULL, '黃小明50', 's2unny1@gmail.com', '1234', NULL, '0954545433', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:14'),
(69, 'Beatles', NULL, NULL, 'beatles', 'su1nny1@gmail.com', '1234', NULL, '0954545422', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:13'),
(72, 'Beatles', NULL, NULL, '黃小明50', 'sunn1y2@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:13'),
(74, 'Beatles', 'MYFARM', '23456543', 'beatles', 's1u1nny1@gmail.com', '12345', '02-23435555', '0933222111', 'Taipei', 'beatless', 'What You Want', '[\"0dcd0d4d391a35cffe956a48c9a008ff.jpg\",\"904051e7182f3df0fb6c9eca0cfc127a.jpg\"]', '[\"black\",\"warning\"]', 1, '2019-09-06 16:44:24'),
(75, 'Beatles', NULL, NULL, 'beatles', 'yosyo1s@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:33:51'),
(76, 'BeatlesFarm', NULL, NULL, 'beatles123', 'olivia@gmail.com', '1234', NULL, '0933221898', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:33:59'),
(77, 'Beatles', NULL, NULL, 'beatles', '11sunny22@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:26'),
(78, 'Beatles', NULL, NULL, 'beatles', '11sunny23@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:44:26'),
(79, 'Beatles', NULL, NULL, 'beatles', 's1unn1y@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 17:32:26'),
(80, 'Beatles', NULL, NULL, '黃小明50', 'sunny126@gmail.com', '1234', NULL, '0933222111', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 16:33:48'),
(81, 'Beatles123', NULL, NULL, 'beatles123', 'beatles551@gmail.com', '1234', NULL, '0933222555', NULL, NULL, NULL, NULL, NULL, 1, '2019-09-06 17:32:03');

-- --------------------------------------------------------

--
-- 資料表結構 `farmer_product`
--

CREATE TABLE `farmer_product` (
  `sid` int(11) UNSIGNED NOT NULL,
  `class_sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `farmer_sid` int(11) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `tag_sid` varchar(255) DEFAULT NULL,
  `approve_sid` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `subtitle` varchar(255) NOT NULL,
  `specification` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `writing` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `shelves` tinyint(1) NOT NULL,
  `organic` varchar(255) DEFAULT NULL,
  `Limited` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `farmer_product`
--

INSERT INTO `farmer_product` (`sid`, `class_sid`, `name`, `farmer_sid`, `stock`, `price`, `color`, `place`, `tag_sid`, `approve_sid`, `picture`, `subtitle`, `specification`, `content`, `writing`, `created_at`, `shelves`, `organic`, `Limited`) VALUES
(49, 51, '高家牛肉', 12, 99, 450, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"beef (19).jpg\",\"beef (18).jpg\",\"beef (22).jpg\",\"beef (17).jpg\",\"beef (15).jpg\"]', '總統宴會指名使用', '1公斤/1箱', '牛肉一箱', '養在雲林的台灣牛選用閹牛，肉質不腥，且格外的軟嫩，在飼育的過程中不使用瘦肉精、生長激素、在宰殺牛之前也不灌水，是小農一直以來的三大堅持！搭配在地新鮮紅蘿蔔及根莖，除了讓肉質更甜美，牛肉也擁有多一份自然的清香！', '2019-08-30 11:45:42', 1, NULL, '限量'),
(50, 53, '高高岡羊肉', 17, 500, 480, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\"]', '總統宴會指名使用', '2斤/1箱', '裝箱', '羊隻品種是頂級薩能及阿爾拜因山羊，挑選11-12個月的閹公羊，堅持不選用身體狀況較差的淘汰母羊。羊行精心調配山羊每日吃的精料／芻料，使羊肉的肉質肥瘦適中，口感有彈性且不帶羊羶味，細細品嘗還會有一絲鮮美甘甜。\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 1, NULL, '限量'),
(51, 76, '西邊小卷', 28, 500, 550, '白', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\"]', '總統宴會指名使用', '2斤/1包', '1包裝', '來自澎湖大海的極鮮小卷，七八月是盛產季，小卷船都會出去三四天才回港，而最後一天捕撈的小卷便稱作「尾網」，是船上最好最新鮮的貨。加上澎湖海域海水鹽分高，海鮮的口感超鮮甜，新鮮小卷，又嫩又甜美！\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 0, NULL, '限量'),
(52, 67, '深山香菇', 22, 500, 350, '黑', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\"]', '總統宴會指名使用', '1斤/1袋', '袋裝', '選育純種蕈菇孢子，在精密控制溫度、濕度的密閉空間生長，嚴格避免外界的雜菌及汙染源，讓香菇菌絲分解培養基質內的有機養份，轉換成多糖體、維生素及多種胺基酸，菇體柔嫩而鮮度高菇傘大又厚實，口感十足。\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 0, NULL, '限量'),
(53, 125, '鄉口高栗子', 9, 1000, 340, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (35).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(54, 51, '堂家牛肉', 12, 99, 420, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"beef (19).jpg\",\"beef (18).jpg\",\"beef (22).jpg\",\"beef (17).jpg\",\"beef (15).jpg\"]', '總統宴會指名使用', '1公斤/1箱', '牛肉一箱', '養在雲林的台灣牛選用閹牛，肉質不腥，且格外的軟嫩，在飼育的過程中不使用瘦肉精、生長激素、在宰殺牛之前也不灌水，是小農一直以來的三大堅持！搭配在地新鮮紅蘿蔔及根莖，除了讓肉質更甜美，牛肉也擁有多一份自然的清香！', '2019-08-30 11:45:42', 1, NULL, '限量'),
(55, 53, '山岡羊肉', 17, 500, 400, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\"]', '總統宴會指名使用', '2斤/1箱', '裝箱', '羊隻品種是頂級薩能及阿爾拜因山羊，挑選11-12個月的閹公羊，堅持不選用身體狀況較差的淘汰母羊。羊行精心調配山羊每日吃的精料／芻料，使羊肉的肉質肥瘦適中，口感有彈性且不帶羊羶味，細細品嘗還會有一絲鮮美甘甜。\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 1, NULL, '限量'),
(56, 76, '西施小卷', 28, 500, 390, '白', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\"]', '總統宴會指名使用', '2斤/1包', '1包裝', '來自澎湖大海的極鮮小卷，七八月是盛產季，小卷船都會出去三四天才回港，而最後一天捕撈的小卷便稱作「尾網」，是船上最好最新鮮的貨。加上澎湖海域海水鹽分高，海鮮的口感超鮮甜，新鮮小卷，又嫩又甜美！\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 0, NULL, '限量'),
(57, 67, '深古香菇', 22, 500, 420, '黑', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\"]', '總統宴會指名使用', '1斤/1袋', '袋裝', '選育純種蕈菇孢子，在精密控制溫度、濕度的密閉空間生長，嚴格避免外界的雜菌及汙染源，讓香菇菌絲分解培養基質內的有機養份，轉換成多糖體、維生素及多種胺基酸，菇體柔嫩而鮮度高菇傘大又厚實，口感十足。\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 0, NULL, '限量'),
(58, 125, '口口香栗子', 9, 1000, 500, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (35).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(59, 51, '天天牛肉', 12, 99, 650, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"beef (19).jpg\",\"beef (18).jpg\",\"beef (22).jpg\",\"beef (17).jpg\",\"beef (15).jpg\"]', '總統宴會指名使用', '1公斤/1箱', '牛肉一箱', '養在雲林的台灣牛選用閹牛，肉質不腥，且格外的軟嫩，在飼育的過程中不使用瘦肉精、生長激素、在宰殺牛之前也不灌水，是小農一直以來的三大堅持！搭配在地新鮮紅蘿蔔及根莖，除了讓肉質更甜美，牛肉也擁有多一份自然的清香！', '2019-08-30 11:45:42', 1, NULL, '限量'),
(66, 53, '山安羊肉', 17, 500, 700, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\",\"lamp (1).jpg\"]', '總統宴會指名使用', '2斤/1箱', '裝箱', '羊隻品種是頂級薩能及阿爾拜因山羊，挑選11-12個月的閹公羊，堅持不選用身體狀況較差的淘汰母羊。羊行精心調配山羊每日吃的精料／芻料，使羊肉的肉質肥瘦適中，口感有彈性且不帶羊羶味，細細品嘗還會有一絲鮮美甘甜。\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 1, NULL, '限量'),
(68, 76, '海邊小卷', 28, 500, 800, '白', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\",\"sq (1).jpg\"]', '總統宴會指名使用', '2斤/1包', '1包裝', '來自澎湖大海的極鮮小卷，七八月是盛產季，小卷船都會出去三四天才回港，而最後一天捕撈的小卷便稱作「尾網」，是船上最好最新鮮的貨。加上澎湖海域海水鹽分高，海鮮的口感超鮮甜，新鮮小卷，又嫩又甜美！\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 0, NULL, '限量'),
(69, 67, '山古香菇', 22, 500, 300, '黑', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\",\"masoo (1).jpg\"]', '總統宴會指名使用', '1斤/1袋', '袋裝', '選育純種蕈菇孢子，在精密控制溫度、濕度的密閉空間生長，嚴格避免外界的雜菌及汙染源，讓香菇菌絲分解培養基質內的有機養份，轉換成多糖體、維生素及多種胺基酸，菇體柔嫩而鮮度高菇傘大又厚實，口感十足。\r\n近年，農民環境觀念逐漸落實，以植物有機肥替代生雞糞與化學肥料，瓜田整潔、衛生，不再有蒼蠅漫天飛舞的情況；瓜農也降低農藥使用量，並嚴守安全用藥的原則，甚至於不惜成本使用微生物防治病蟲害，讓花蓮西瓜與自然環境更加貼近。', '2019-08-30 00:00:00', 0, NULL, '限量'),
(70, 125, '高季栗子', 9, 1000, 320, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (35).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(71, 125, '甜蜜栗子', 9, 1000, 350, '黃', '東部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (34).jpg\",\"chestnut (18).jpg\",\"chestnut (19).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(72, 125, '秋高栗子', 9, 1000, 360, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (33).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(73, 69, '植栽杏鮑菇', 9, 1000, 390, '白', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (22).jpg\",\"chestnut (18).jpg\",\"chestnut (20).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質;產銷班', '1公斤/1袋', '袋裝', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', '限量'),
(74, 125, '秋栗子', 9, 1000, 400, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (32).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(75, 125, '高栗子', 9, 1000, 500, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (19).jpg\",\"chestnut (18).jpg\",\"chestnut (22).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(76, 125, '天使栗子', 9, 1000, 550, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (17).jpg\",\"chestnut (18).jpg\",\"chestnut (23).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(77, 125, '安藤栗子', 9, 1000, 520, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (23).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(78, 125, '高藤栗子', 9, 1000, 450, '黃', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (21).jpg\",\"chestnut (18).jpg\",\"chestnut (24).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(79, 125, '美若栗子', 9, 1000, 430, '黃', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (20).jpg\",\"chestnut (18).jpg\",\"chestnut (27).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(80, 125, '督高栗子', 9, 1000, 300, '黃', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (35).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(81, 125, '密蜜栗子', 9, 1000, 320, '黃', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (34).jpg\",\"chestnut (18).jpg\",\"chestnut (19).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, NULL, NULL),
(82, 125, '騰歡栗', 9, 1000, 310, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (33).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(83, 125, '秋田栗', 9, 1000, 300, '黃', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (22).jpg\",\"chestnut (18).jpg\",\"chestnut (20).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(84, 125, '秋高栗', 9, 1000, 500, '黃', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (32).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(85, 125, '高山炒栗子', 9, 1000, 500, '黃', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (19).jpg\",\"chestnut (18).jpg\",\"chestnut (22).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(86, 125, '秋高炒栗子', 9, 1000, 360, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (17).jpg\",\"chestnut (18).jpg\",\"chestnut (23).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(87, 125, '秋季栗子', 9, 1000, 320, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (23).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(88, 125, '下美栗子', 9, 1000, 400, '黃', '北部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (21).jpg\",\"chestnut (18).jpg\",\"chestnut (24).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(89, 125, '美妙栗子', 9, 1000, 410, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (20).jpg\",\"chestnut (18).jpg\",\"chestnut (27).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(90, 125, '廟口栗子', 9, 1000, 390, '黃', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(91, 125, '街區栗子', 9, 1000, 440, '黃', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (21).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(92, 125, '都市栗子', 9, 100, 420, '黃', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(93, 125, '高級栗子', 9, 1000, 410, '黃', '南部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (22).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(94, 125, '歌栗子', 9, 1000, 450, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(95, 125, '栗子', 9, 1000, 390, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (19).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(96, 125, '秋高栗子', 9, 300, 500, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\",\"chestnut (18).jpg\"]', '無毒、無農藥、高品質', '2公斤/1箱', '栗子1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的水果給大家，吃得安心又開心。', '2019-08-30 20:57:10', 0, '有機', NULL),
(97, 124, '新貴酪梨', 9, 750, 750, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (13).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(98, 124, '本本酪梨', 9, 750, 850, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (10).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-19 00:00:00', 0, '有機', NULL),
(99, 124, '幕幕酪梨', 9, 750, 800, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥高品質;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(100, 124, '台灣高品質酪梨', 9, 750, 720, '黃', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '健康料理;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-08 00:00:00', 0, '有機', NULL),
(101, 124, '台灣好好酪梨', 9, 750, 650, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (13).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(102, 54, '土雞肉', 17, 7, 800, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (40).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, '有機', NULL),
(103, 54, '山雞肉', 17, 7, 800, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (30).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, '有機', NULL),
(104, 54, '高山雞肉', 17, 7, 890, '白', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (20).jpg\",\"chicken (10).jpg\",\"chicken (12).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, '有機', NULL),
(105, 54, '高土雞肉', 17, 7, 980, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (10).jpg\",\"chicken (13).jpg\",\"chicken (14).jpg\",\"chicken (15).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, '有機', NULL),
(106, 54, '吃好雞肉', 17, 7, 980, '白', '北部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (10).jpg\",\"chicken (11).jpg\",\"chicken (12).jpg\",\"chicken (21).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, '有機', NULL),
(107, 54, '奛雞肉', 17, 7, 980, '白', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (22).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, '有機', NULL),
(108, 124, '台酪梨', 9, 750, 650, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (10).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-19 00:00:00', 0, '有機', NULL),
(109, 124, '兒酪梨', 9, 750, 900, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (13).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥高品質;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(110, 124, '台安酪梨', 9, 750, 700, '黃', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '健康料理;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-08 00:00:00', 0, '有機', NULL),
(111, 124, '新貴酪梨', 9, 750, 650, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(112, 124, '本本酪梨', 9, 750, 650, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (10).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-19 00:00:00', 0, '有機', NULL),
(113, 124, '相思酪梨', 9, 750, 900, '黃', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (16).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥高品質;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(114, 124, '台灣酪梨', 9, 750, 700, '黃', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '健康料理;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-08 00:00:00', 0, '有機', NULL),
(115, 124, '牛油酪梨', 9, 750, 650, '黃', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (10).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-19 00:00:00', 0, '有機', NULL),
(116, 124, '本山酪梨', 9, 750, 900, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥高品質;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(117, 124, '天美酪梨', 9, 750, 700, '黃', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '健康料理;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-08 00:00:00', 0, '有機', NULL),
(118, 124, '新化酪梨', 9, 750, 650, '黃', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (13).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(119, 124, '本本酪梨', 9, 750, 650, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (10).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-19 00:00:00', 0, '有機', NULL),
(120, 124, '幕幕酪梨', 9, 750, 720, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥高品質;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(121, 124, '農酪梨', 9, 750, 700, '黃', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (12).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '健康料理;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-08 00:00:00', 0, '有機', NULL),
(122, 124, '梅嶺酪梨', 9, 750, 650, '黃', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"avocado (13).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\",\"avocado (15).jpg\"]', '口齒留香;無農藥;健康滿分', '2公斤/1箱', '酪梨1箱', '飯店式管理　盼自動化設備改善農業缺工問題\r\n發展至目前的大規模栽種，葉大哥自己也始料未及，「夥伴們也都唸我說這樣不行，做不來啦。」因此，葉大哥傾向將果園採飯店式管理，並以自動化管理，用沙灘車運送施肥  自動化設備灑水，盼藉由自動化設備取代人力，來解決改善農業長期存在的缺工問題。對於CEO果園的未來，葉大哥有所期許：果園採友善管理，栽培均以健康安全為目標，讓大家能夠吃得安心。預計陸續培育新的品種作物，提供更多元化的作物給大家，吃得安心又開心。', '2019-09-07 00:00:00', 0, '有機', NULL),
(123, 54, '新化土雞肉', 17, 7, 800, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (40).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, NULL, NULL),
(124, 54, '歌加山雞肉', 17, 7, 890, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (30).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, NULL, NULL),
(125, 54, '高山上雞肉', 17, 7, 980, '白', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (20).jpg\",\"chicken (10).jpg\",\"chicken (12).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, NULL, NULL),
(126, 54, '高紅土雞肉', 17, 7, 890, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (10).jpg\",\"chicken (13).jpg\",\"chicken (14).jpg\",\"chicken (15).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, NULL, NULL),
(127, 54, '雷納雞肉', 17, 7, 850, '白', '北部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (10).jpg\",\"chicken (11).jpg\",\"chicken (12).jpg\",\"chicken (21).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, '有機', NULL),
(128, 54, '壯壯雞肉', 17, 7, 880, '白', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (22).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, NULL, NULL),
(129, 54, '鮮嫩雞肉', 17, 7, 880, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (50).jpg\",\"chicken (35).jpg\",\"chicken (25).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, NULL, NULL),
(130, 54, '好棒棒雞肉', 17, 7, 840, '白', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"chicken (10).jpg\",\"chicken (33).jpg\",\"chicken (66).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\",\"chicken (10).jpg\"]', '最高品質用心經營', '1600g/1隻', '1包', '老協珍嚴選台灣純土雞\r\n為市面上第一隻自行育種\r\n並符合現代科學方式育種、飼養的優質土雞\r\n\r\n肉質鮮甜，極負咬感\r\n脂肪含量少，熟成度佳與無腥味\r\n口感有別市面上白肉雞與仿土雞\r\n\r\n產品無抗生素、無藥物殘留\r\n全程15℃電宰處理，並新鮮冷凍配送到府。\r\n適合白切、三杯、燉湯、燒烤等各式料理手法!', '2019-08-05 00:00:00', 1, NULL, NULL),
(133, 62, '情日植栽杏鮑菇', 17, 500, 280, '綠', '北部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"8704059d79e2b3c2fefe53dbb6971522.jpg\",\"1b050197ce094ece76cb3bf0e8fc20bf.jpg\"]', '無毒、無農藥、高品質', '600g/1袋', '四季豆', '比起一般蔬菜，四季豆這類豆科植物，蛋白質含量相對比較多，是它的一大特色。豆莢的纖維質含量並不輸給葉菜類蔬菜，四季豆裡的纖維質就比空心菜、高麗菜來得高，也勝過蘆筍，堪稱是蔬菜中的「高纖一族」。', '2019-08-04 00:00:00', 1, NULL, NULL),
(134, 62, '天美植栽杏鮑菇', 17, 500, 380, '綠', '北部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"8704059d79e2b3c2fefe53dbb6971522.jpg\",\"1b050197ce094ece76cb3bf0e8fc20bf.jpg\"]', '無毒、無農藥、高品質', '600g/1袋', '四季豆', '比起一般蔬菜，四季豆這類豆科植物，蛋白質含量相對比較多，是它的一大特色。豆莢的纖維質含量並不輸給葉菜類蔬菜，四季豆裡的纖維質就比空心菜、高麗菜來得高，也勝過蘆筍，堪稱是蔬菜中的「高纖一族」。', '2019-08-04 00:00:00', 1, NULL, NULL),
(135, 62, '天天家杏鮑菇', 17, 500, 480, '綠', '北部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"8704059d79e2b3c2fefe53dbb6971522.jpg\",\"1b050197ce094ece76cb3bf0e8fc20bf.jpg\"]', '無毒、無農藥、高品質', '600g/1袋', '四季豆', '比起一般蔬菜，四季豆這類豆科植物，蛋白質含量相對比較多，是它的一大特色。豆莢的纖維質含量並不輸給葉菜類蔬菜，四季豆裡的纖維質就比空心菜、高麗菜來得高，也勝過蘆筍，堪稱是蔬菜中的「高纖一族」。', '2019-08-04 00:00:00', 1, NULL, NULL),
(136, 62, '高級杏鮑菇', 17, 0, 280, '綠', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"9ce1d523404c05bd495231b3395fd343.jpg\"]', '無毒、無農藥、高品質', '600g/1袋', '四季豆', '比起一般蔬菜，四季豆這類豆科植物，蛋白質含量相對比較多，是它的一大特色。豆莢的纖維質含量並不輸給葉菜類蔬菜，四季豆裡的纖維質就比空心菜、高麗菜來得高，也勝過蘆筍，堪稱是蔬菜中的「高纖一族」。', '2019-08-04 00:00:00', 0, NULL, NULL),
(137, 62, '杏鮑菇', 17, 500, 380, '綠', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"8704059d79e2b3c2fefe53dbb6971522.jpg\",\"1b050197ce094ece76cb3bf0e8fc20bf.jpg\"]', '無毒、無農藥、高品質', '600g/1袋', '四季豆', '比起一般蔬菜，四季豆這類豆科植物，蛋白質含量相對比較多，是它的一大特色。豆莢的纖維質含量並不輸給葉菜類蔬菜，四季豆裡的纖維質就比空心菜、高麗菜來得高，也勝過蘆筍，堪稱是蔬菜中的「高纖一族」。', '2019-08-04 00:00:00', 0, NULL, NULL),
(138, 62, '植杏鮑菇', 17, 500, 480, '綠', '北部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"8704059d79e2b3c2fefe53dbb6971522.jpg\",\"1b050197ce094ece76cb3bf0e8fc20bf.jpg\"]', '無毒、無農藥、高品質', '600g/1袋', '四季豆', '比起一般蔬菜，四季豆這類豆科植物，蛋白質含量相對比較多，是它的一大特色。豆莢的纖維質含量並不輸給葉菜類蔬菜，四季豆裡的纖維質就比空心菜、高麗菜來得高，也勝過蘆筍，堪稱是蔬菜中的「高纖一族」。', '2019-08-04 00:00:00', 0, NULL, NULL),
(143, 78, '新鮮鮭魚', 25, 50, 500, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (66).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-09 00:00:00', 0, NULL, NULL),
(144, 78, '新鱻鮭魚', 25, 50, 500, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (11).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(145, 78, '新天地鮭魚', 25, 50, 500, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (15).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-05 00:00:00', 0, NULL, NULL),
(146, 78, '新本土鮭魚', 25, 50, 600, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (17).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(147, 78, '鱻鮭魚', 25, 50, 500, '紅', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (72).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(148, 78, '鮮鱻鮭魚', 25, 50, 400, '紅', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (29).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-11 00:00:00', 0, NULL, NULL),
(149, 78, '仙鱻鮭魚', 25, 50, 700, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (52).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-21 00:00:00', 0, NULL, NULL),
(150, 78, '好喔鮭魚', 25, 50, 800, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (66).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-09 00:00:00', 0, NULL, NULL),
(151, 78, '鮭魚', 25, 50, 600, '紅', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (22).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(152, 78, '新鮭魚', 25, 50, 500, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (52).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-05 00:00:00', 0, NULL, NULL),
(153, 78, '甜美鮭魚', 25, 50, 500, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (82).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(154, 78, '軟嫩鮭魚', 25, 50, 700, '紅', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (72).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(155, 78, '先知鮭魚', 25, 50, 600, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (80).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-11 00:00:00', 0, NULL, NULL),
(156, 78, '鮮汁鮭魚', 25, 50, 400, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (52).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-21 00:00:00', 0, NULL, NULL),
(157, 78, '口鮭魚', 25, 50, 500, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (82).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(158, 78, '海中鮭魚', 25, 50, 600, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (66).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-09 00:00:00', 0, NULL, NULL),
(159, 78, '由由鮭魚', 25, 50, 400, '紅', '南部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (22).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(160, 78, '三鮮鮭魚', 25, 50, 500, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (52).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-05 00:00:00', 0, NULL, NULL),
(161, 78, '鮮五家鮭魚', 25, 50, 500, '紅', '中部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (82).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(162, 78, '新鱻家鮭魚', 25, 50, 500, '紅', '南部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (72).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(163, 78, '轟天鮭魚', 25, 50, 500, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (80).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-11 00:00:00', 0, NULL, NULL),
(164, 78, '讚讚家鮭魚', 25, 50, 400, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (52).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-21 00:00:00', 0, NULL, NULL),
(165, 78, '野口鮭魚', 25, 50, 700, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"fish (82).jpg\",\"fish (83).jpg\",\"fish (84).jpg\",\"fish (85).jpg\",\"fish (86).jpg\",\"fish (87).jpg\"]', '口齒留香;在地生鮮;人道養殖', '600g/1袋', '1包', '鮭魚營養滿分味！鮮嫩扎實的口感，富含DHA、EPA、OMEGA-3、，與高蛋白質、維他命及多種礦物質，容易被人體吸收，更是餐桌上不可少的健康美味佳餚！鮭魚無論是炙燒鮭魚、香煎鮭魚、甚至做成沙拉食用都非常可口美味喔！鮭魚肉質鮮嫩、營養美味，鮮嫩扎實的口感，富含DHA、EPA，營養健康滿點，給你充沛活力！撒上少許鹽，煎至金黃色，簡單的料理步驟，在擠上點檸檬就快速完成一道健康料理了！ ', '2019-08-01 00:00:00', 0, NULL, NULL),
(166, 3, '後壁橘', 8, 12, 120, '黃', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"99316649a09a0919d174d801b92e3cb8.jpg\"]', '12', '12', '121', '12', '2019-09-03 13:32:14', 0, NULL, NULL),
(169, 1, '冬雪橘', 8, 536, 320, '白', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"54c0d2a289d1edc4fd4daa40202b4990.jpg\",\"654e4c8ae879ee498daa532318e8bfc5.jpg\"]', '546546', '12', '546546', '546546', '2019-09-03 14:39:07', 0, NULL, NULL),
(170, 1, '柳橘', 8, 686, 220, '黑', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"c75dafd1ef33c0bd6398cd542c2807f5.jpg\"]', '86786', '876876', '876786', '786786', '2019-09-04 17:02:35', 0, NULL, NULL),
(171, 1, '山坡橘', NULL, 123, 330, '黑', '北部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"81cd81acdfd00bafb42ff1554d58b24c.jpg\"]', '12', '123', '112', '12', '2019-09-04 17:06:39', 0, NULL, NULL),
(172, 55, '多汁櫻鴨胸', 31, 60, 699, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-13 00:00:00', 0, NULL, NULL),
(173, 55, '多汁桃鴨胸', 31, 60, 899, '紅', '中部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (50).jpg\",\"duck (51).jpg\",\"duck (52).jpg\",\"duck (53).jpg\",\"duck (54).jpg\",\"duck (55).jpg\"]', '口齒留香;在地生鮮;人道養殖', '75元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-10 00:00:00', 0, NULL, NULL);
INSERT INTO `farmer_product` (`sid`, `class_sid`, `name`, `farmer_sid`, `stock`, `price`, `color`, `place`, `tag_sid`, `approve_sid`, `picture`, `subtitle`, `specification`, `content`, `writing`, `created_at`, `shelves`, `organic`, `Limited`) VALUES
(174, 55, '多汁鴨胸', 31, 60, 799, '紅', '南部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '大家都說讚;超高回購率;口齒留香', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-05 00:00:00', 0, NULL, NULL),
(175, 55, '櫻桃鴨胸', 31, 60, 699, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (40).jpg\",\"duck (41).jpg\",\"duck (42).jpg\",\"duck (43).jpg\",\"duck (44).jpg\",\"duck (45).jpg\"]', '口齒留香;在地生鮮;古法醃漬入味', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-18 00:00:00', 1, NULL, NULL),
(176, 55, '多汁櫻桃鴨胸', 31, 60, 999, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-13 00:00:00', 1, NULL, NULL),
(177, 55, '爽口鴨胸', 31, 60, 850, '紅', '東部', '[\"當季限定\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (50).jpg\",\"duck (51).jpg\",\"duck (52).jpg\",\"duck (53).jpg\",\"duck (54).jpg\",\"duck (55).jpg\"]', '口齒留香;在地生鮮;人道養殖', '75元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-10 00:00:00', 1, NULL, NULL),
(178, 55, '鴨胸', 31, 60, 799, '紅', '東部', '[\"有機\",\"當季限定\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (30).jpg\",\"duck (31).jpg\",\"duck (32).jpg\",\"duck (33).jpg\",\"duck (34).jpg\",\"duck (35).jpg\"]', '古法醃漬入味;超高回購率', '80元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-09 00:00:00', 0, NULL, NULL),
(179, 55, '天天香鴨胸', 31, 60, 650, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (40).jpg\",\"duck (41).jpg\",\"duck (42).jpg\",\"duck (43).jpg\",\"duck (44).jpg\",\"duck (45).jpg\"]', '口齒留香;在地生鮮;古法醃漬入味', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-18 00:00:00', 1, NULL, NULL),
(180, 55, '天使櫻桃鴨胸', 31, 60, 699, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-13 00:00:00', 0, NULL, NULL),
(181, 55, '美好櫻桃鴨胸', 31, 60, 899, '紅', '北部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (50).jpg\",\"duck (51).jpg\",\"duck (52).jpg\",\"duck (53).jpg\",\"duck (54).jpg\",\"duck (55).jpg\"]', '口齒留香;在地生鮮;人道養殖', '75元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-10 00:00:00', 0, NULL, NULL),
(182, 55, '之多汁鴨胸', 31, 60, 799, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '大家都說讚;超高回購率;口齒留香', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-05 00:00:00', 0, NULL, NULL),
(183, 55, '櫻也鴨胸', 31, 60, 699, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (20).jpg\",\"duck (21).jpg\",\"duck (42).jpg\",\"duck (43).jpg\",\"duck (44).jpg\",\"duck (45).jpg\"]', '口齒留香;在地生鮮;古法醃漬入味', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-18 00:00:00', 1, NULL, NULL),
(184, 55, '水嫩櫻桃鴨胸', 31, 60, 999, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-13 00:00:00', 1, NULL, NULL),
(185, 55, '爽口沐陶鴨胸', 31, 60, 850, '紅', '東部', '[\"當季限定\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck ().jpg\",\"duck (51).jpg\",\"duck (52).jpg\",\"duck (53).jpg\",\"duck (54).jpg\",\"duck (55).jpg\"]', '口齒留香;在地生鮮;人道養殖', '75元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-10 00:00:00', 1, NULL, NULL),
(186, 55, '家兒口鴨胸', 31, 60, 799, '紅', '東部', '[\"有機\",\"當季限定\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (30).jpg\",\"duck (31).jpg\",\"duck (32).jpg\",\"duck (33).jpg\",\"duck (34).jpg\",\"duck (35).jpg\"]', '古法醃漬入味;超高回購率', '80元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-09 00:00:00', 0, NULL, NULL),
(187, 55, '在地鴨胸', 31, 60, 650, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (10).jpg\",\"duck (33).jpg\",\"duck (42).jpg\",\"duck (43).jpg\",\"duck (44).jpg\",\"duck (45).jpg\"]', '口齒留香;在地生鮮;古法醃漬入味', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-18 00:00:00', 1, NULL, NULL),
(188, 55, '日日香鴨胸', 31, 60, 650, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (40).jpg\",\"duck (41).jpg\",\"duck (42).jpg\",\"duck (43).jpg\",\"duck (44).jpg\",\"duck (45).jpg\"]', '口齒留香;在地生鮮;古法醃漬入味', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-18 00:00:00', 1, NULL, NULL),
(189, 55, '野味櫻桃鴨胸', 31, 60, 699, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-13 00:00:00', 0, NULL, NULL),
(190, 55, '多多櫻桃鴨胸', 31, 60, 899, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (50).jpg\",\"duck (51).jpg\",\"duck (52).jpg\",\"duck (53).jpg\",\"duck (54).jpg\",\"duck (55).jpg\"]', '口齒留香;在地生鮮;人道養殖', '75元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-10 00:00:00', 0, NULL, NULL),
(191, 55, '多汁家鴨胸', 31, 60, 799, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '大家都說讚;超高回購率;口齒留香', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-05 00:00:00', 0, NULL, NULL),
(192, 55, '櫻桃鴨胸', 31, 60, 699, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (20).jpg\",\"duck (21).jpg\",\"duck (42).jpg\",\"duck (43).jpg\",\"duck (44).jpg\",\"duck (45).jpg\"]', '口齒留香;在地生鮮;古法醃漬入味', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-18 00:00:00', 1, NULL, NULL),
(193, 55, '天津櫻桃鴨胸', 31, 60, 999, '紅', '東部', '[\"有機\",\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (66).jpg\",\"duck (67).jpg\",\"duck (68).jpg\",\"duck (70).jpg\",\"duck (71).jpg\",\"duck (72).jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-13 00:00:00', 1, NULL, NULL),
(194, 55, '爽口櫻桃鴨胸', 31, 60, 850, '紅', '東部', '[\"當季限定\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck ().jpg\",\"duck (51).jpg\",\"duck (52).jpg\",\"duck (53).jpg\",\"duck (54).jpg\",\"duck (55).jpg\"]', '口齒留香;在地生鮮;人道養殖', '75元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-10 00:00:00', 1, NULL, NULL),
(195, 55, '如如鴨胸', 31, 60, 799, '紅', '東部', '[\"有機\",\"當季限定\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (30).jpg\",\"duck (31).jpg\",\"duck (32).jpg\",\"duck (33).jpg\",\"duck (34).jpg\",\"duck (35).jpg\"]', '古法醃漬入味;超高回購率', '80元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-09 00:00:00', 0, NULL, NULL),
(196, 55, '葉芥鴨胸', 31, 60, 650, '紅', '中部', '[\"有機\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"duck (10).jpg\",\"duck (33).jpg\",\"duck (42).jpg\",\"duck (43).jpg\",\"duck (44).jpg\",\"duck (45).jpg\"]', '口齒留香;在地生鮮;古法醃漬入味', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-18 00:00:00', 1, NULL, NULL),
(197, 55, '地口櫻桃鴨胸', 31, 60, 699, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"30_56f03ce274dadbd847195db72a5d528e_1534182333.jpg\",\"Smoke-Duck-Breast1.jpg\",\"DuckBreast.jpg\",\"magret-de-canard-southern-france-travel.jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感', '2019-11-13 00:00:00', 0, NULL, NULL),
(198, 55, '軟嫩櫻桃鴨胸', 31, 60, 799, '紅', '東部', '[\"限量\"]', '財團法人國際美育自然生態基金會(MOA)', '[\"30_56f03ce274dadbd847195db72a5d528e_1534182333.jpg\",\"Smoke-Duck-Breast1.jpg\",\"DuckBreast.jpg\",\"magret-de-canard-southern-france-travel.jpg\"]', '口齒留香;在地生鮮;人道養殖', '55元/1斤', '1包', '嚴選台灣雲林在地土番鴨。拆袋退冰即食，方便美味。古法醃漬入味，皮脆肉質飽滿 。米其林食材，在家輕鬆享用!鴨肉料理推薦,元進莊鴨肉料理,香燻鴨胸採用精選新鮮土番去骨鴨子,堅持古法醃漬24小時,層層煙燻上色,蔗糖處理鴨肉質甘甜,滑嫩入口,風味猶加,肉質鮮美不油膩,風味特殊,低脂,低熱量,低膽固醇,健康無污染,方便即時、登山、旅遊、休閒、送禮均適合.嚴選台灣土番鴨而成,結合中式的傳統做法和西式的料理口感,希望帶給消費者新的食用口感.', '2019-11-13 00:00:00', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `fm_goods_cart`
--

CREATE TABLE `fm_goods_cart` (
  `fm_goods_cart_id` int(11) NOT NULL,
  `farmer_product` int(10) UNSIGNED NOT NULL,
  `main_cart` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(255) CHARACTER SET utf8 NOT NULL,
  `creat_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `fm_goods_cart`
--

INSERT INTO `fm_goods_cart` (`fm_goods_cart_id`, `farmer_product`, `main_cart`, `quantity`, `status`, `creat_at`) VALUES
(634, 70, 1, 1, '收藏中', '2019-11-28 18:35:47'),
(663, 49, 1, 1, '收藏中', '2019-11-28 19:00:25'),
(670, 103, 1, 1, '收藏中', '2019-11-28 19:01:08'),
(686, 104, 1, 1, '收藏中', '2019-11-28 19:11:41'),
(691, 100, 1, 1, '收藏中', '2019-11-28 19:13:25'),
(695, 69, 1, 1, '收藏中', '2019-11-28 19:40:19'),
(700, 72, 1, 1, '收藏中', '2019-11-28 21:07:46'),
(707, 104, 1, 1, '收藏中', '2019-11-29 13:04:28'),
(708, 52, 1, 1, '收藏中', '2019-11-29 13:04:31'),
(732, 52, 1, 1, '收藏中', '2019-11-29 16:03:04'),
(805, 49, 2, 5, '收藏中', '2019-12-02 15:00:17'),
(813, 50, 2, 1, '收藏中', '2019-12-02 16:20:46'),
(814, 51, 2, 1, '收藏中', '2019-12-02 16:20:48'),
(818, 51, 1, 1, '收藏中', '2019-12-02 16:29:11'),
(820, 50, 1, 1, '收藏中', '2019-12-02 16:33:24'),
(827, 52, 2, 1, '購物中', '2019-12-02 18:12:26');

-- --------------------------------------------------------

--
-- 資料表結構 `fm_goods_comment`
--

CREATE TABLE `fm_goods_comment` (
  `fm_goods_comment_id` int(11) UNSIGNED NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `farmer_product` int(10) UNSIGNED NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `fm_goods_comment`
--

INSERT INTO `fm_goods_comment` (`fm_goods_comment_id`, `customer_information`, `farmer_product`, `comment`, `create_at`) VALUES
(9, 1, 170, '好吃必買', '2019-08-23 00:00:00'),
(10, 2, 170, '上面騙我', '2019-11-20 00:00:00'),
(11, 1, 49, '啊啊啊啊啊啊ㄚㄚㄚㄚㄚㄚ ㄚㄚㄚ ㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚ ㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚㄚ阿', '2019-08-23 00:00:00'),
(12, 1, 66, '哈雷路亞\r\n主阿\r\n阿拉\r\n佛祖', '2019-11-20 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `fm_goods_order`
--

CREATE TABLE `fm_goods_order` (
  `fm_goods_order_id` int(11) NOT NULL,
  `main_order` int(10) UNSIGNED NOT NULL,
  `farmer_product` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `fm_goods_order`
--

INSERT INTO `fm_goods_order` (`fm_goods_order_id`, `main_order`, `farmer_product`, `quantity`) VALUES
(50, 110, 84, 1),
(51, 110, 83, 1),
(52, 111, 84, 1),
(53, 111, 83, 1),
(54, 113, 82, 1),
(55, 118, 72, 1),
(56, 118, 49, 1),
(57, 118, 66, 1),
(58, 118, 73, 1),
(59, 118, 69, 1),
(60, 118, 68, 1),
(61, 118, 81, 1),
(62, 118, 80, 1),
(63, 118, 69, 1),
(64, 119, 66, 1),
(65, 119, 49, 1),
(66, 119, 73, 1),
(67, 119, 72, 1),
(68, 119, 69, 1),
(69, 119, 68, 1),
(70, 119, 81, 1),
(71, 119, 80, 1),
(72, 119, 69, 1),
(73, 120, 66, 1),
(74, 120, 176, 1),
(75, 120, 66, 1),
(76, 120, 85, 1),
(77, 120, 66, 1),
(78, 120, 66, 1),
(79, 120, 66, 1),
(80, 121, 85, 1),
(81, 121, 66, 1),
(82, 121, 176, 1),
(83, 121, 66, 1),
(84, 121, 66, 1),
(85, 121, 66, 1),
(86, 121, 66, 1),
(87, 124, 66, 1),
(88, 125, 66, 1),
(91, 129, 66, 1),
(92, 130, 66, 1),
(93, 141, 66, 1),
(94, 142, 66, 1),
(95, 143, 66, 1),
(96, 144, 66, 1),
(97, 145, 69, 1),
(98, 145, 102, 1),
(99, 145, 100, 1),
(100, 145, 66, 3),
(101, 145, 71, 1),
(127, 151, 50, 1),
(128, 151, 51, 1),
(129, 151, 52, 1),
(130, 152, 51, 1),
(131, 152, 52, 1),
(132, 152, 50, 1),
(133, 153, 107, 1),
(134, 154, 107, 1),
(135, 155, 56, 1),
(136, 155, 49, 1),
(137, 155, 50, 3),
(138, 155, 51, 1),
(139, 155, 52, 1),
(140, 156, 51, 1),
(141, 156, 52, 1),
(142, 156, 53, 1),
(143, 157, 51, 1),
(144, 157, 53, 1),
(145, 157, 52, 1),
(146, 158, 66, 3),
(147, 159, 66, 3),
(148, 160, 50, 1),
(149, 160, 52, 1),
(150, 161, 52, 1),
(151, 161, 50, 1),
(152, 162, 51, 1),
(153, 162, 52, 1),
(154, 163, 52, 1),
(155, 163, 54, 1),
(156, 163, 51, 1),
(157, 163, 104, 2),
(158, 164, 54, 1),
(159, 164, 51, 1),
(160, 164, 52, 1),
(161, 164, 104, 2);

-- --------------------------------------------------------

--
-- 資料表結構 `forum_categories`
--

CREATE TABLE `forum_categories` (
  `forum_id` int(11) NOT NULL,
  `forum_title` varchar(45) DEFAULT NULL,
  `forum_class` varchar(45) DEFAULT NULL,
  `forum_type` varchar(45) DEFAULT NULL,
  `forum_good` int(11) DEFAULT NULL,
  `forum_collect` int(11) DEFAULT NULL,
  `forum_content` varchar(4000) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `forum_image` varchar(4000) DEFAULT NULL,
  `forum_browse` int(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `forum_categories`
--

INSERT INTO `forum_categories` (`forum_id`, `forum_title`, `forum_class`, `forum_type`, `forum_good`, `forum_collect`, `forum_content`, `create_date`, `create_user`, `forum_image`, `forum_browse`) VALUES
(1, '【分享】初學者也學得會的炸豬排！', '1', '派對同樂', 12, 18, '即使是初學者，也可以輕輕鬆鬆做出炸豬排喔~快來試試看幾個簡單的步驟\r\n<br></br>\r\n<div>份量 2 人份/時間 10 分鐘</div>\r\n                <br></br>\r\n                <div>食材</div>\r\n                <div>厚豬肉片 1~2片</div>\r\n                <div>高麗菜絲 適量</div>\r\n                <br></br>\r\n                <div>【豬肉炸粉】</div>\r\n                <div>麵粉(地瓜粉) 適量</div>\r\n                <div>蛋溢 1~2顆</div>\r\n                <div>麵包粉 適量</div>\r\n                <br></br>\r\n                <div>【豬肉醃製】</div>\r\n                <div>鹽巴 適量</div>\r\n                <div>黑胡椒粒 適量</div>\r\n                <br></br>\r\n                <div>【撒粉】</div>\r\n                <div>黃芥末醬 隨意</div>\r\n                <div>胡椒鹽 隨意</div>\r\n                <div>番茄醬 隨意</div>\r\n                <div>烤肉醬 隨意</div>\r\n                <br></br>\r\n                <div>開始料理囉</div>\r\n                <br></br>\r\n                <div>步驟 1</div>\r\n                <div>\r\n                  ①豬肉片用刀背稍微敲打後，用叉子搓洞。(目的是讓豬肉變軟嫩與好入味)\r\n                </div>\r\n                <div>②有肉槌也可以直接用肉槌敲打即可。</div>\r\n                <br></br>\r\n                <div>步驟 2</div>\r\n                <div>\r\n                  ①➕適量鹽巴、黑胡椒粒醃製 (也可以加入些許香料類來醃製)\r\n                </div>\r\n                <br></br>\r\n                <div>步驟 3</div>\r\n                <div>\r\n                  ①高麗菜；切絲後泡冰水 (泡冰水是要增加高麗菜絲的脆度用)\r\n                </div>\r\n                <div>\r\n                  ②豬肉片；醃製完後依序 麵粉>蛋溢>麵包粉，來做沾黏。\r\n                  (再沾黏的過程中，可以稍微按壓一下肉，可以確保粉有沾黏上)\r\n                </div>\r\n                <br></br>\r\n                <div>步驟 4</div>\r\n                <div>①開大火將油鍋燒至160~180度後轉中火</div>\r\n                <div>\r\n                  ❶測油溫可以抓一搓麵包粉丟進去式式看，\r\n                  如果會浮起來有泡泡代表油溫ok，如果沒有就還不夠熱\r\n                </div>\r\n                <div>❷如果油溫太高會冒煙，這時候請轉小火等沒煙再試試看</div>\r\n                <div>❹油鍋會冒煙代表油溫太高，請轉小火，不然很危險！！</div>\r\n                <br></br>\r\n                <div>步驟 5</div>\r\n                <div>\r\n                  ①油溫ok後➕豬排兩面各炸約2分鐘左右至金黃色即可。\r\n                  (可以用筷子搓搓看有沒有熟透，沒有再繼續炸)\r\n                </div>\r\n                <div>②油溫請保持，有泡泡~不會冒煙的熱度(160~180度)</div>\r\n                <div>③再撈起前再轉最大火炸約5~10秒逼油撈起後關火即可上菜。</div>\r\n                <div>小撇步</div>\r\n                <div>\r\n                  ❶敲打豬肉有肉槌的話，可以用肉槌敲打即可。\r\n                  　(敲打目的是要讓肉口感更軟嫩與入味)\r\n                </div>\r\n                <div>❷豬肉沾粉第一層麵粉也可以用其他粉類代替。</div>\r\n                <div>\r\n                  ❸如果想要炸厚一點的話，沾粉的步驟可以多做幾次。\r\n                  　(麵粉>蛋溢>麵粉>蛋溢>麵包粉) 最後沾麵包粉即可\r\n                </div>\r\n                <div>\r\n                  ❹油溫建議保持在160~180度，肉再下鍋前可以先放一小搓\r\n                  麵包粉下去試油溫 有無泡泡，最後起鍋前再開大火逼油即可。\r\n                </div>\r\n                <div>❺油鍋會冒煙代表油溫太高，請轉小火，不然很危險！！</div>', '2019-11-07 00:00:00', 21, '../../assets/images/forum/forum-02.jpg', 361),
(6, '【閒聊】奧利佛大廚上菜好好吃', '2', '魅力北部', 3, 3, '<p>奧利佛好帥喔 一年前預約五星級餐廳 今天終於無願以償的吃到了QQQQQ</p><p>前菜是 凱薩沙拉</p>', '2019-11-25 11:04:55', 15, 'http://localhost:6003/images/forum/1/fd1adfd2313b11bff92628f72961e448.jpg', 16),
(7, '【分享】初學者也學得會的炸豬排！', '3', '派對同樂', 0, 2, '即使是初學者，也可以輕輕鬆鬆做出炸豬排喔~快來試試看幾個簡單的步驟\r\n<br></br>\r\n<div>份量 2 人份/時間 10 分鐘</div>\r\n                <br></br>\r\n                <div>食材</div>\r\n                <div>厚豬肉片 1~2片</div>\r\n                <div>高麗菜絲 適量</div>\r\n                <br></br>\r\n                <div>【豬肉炸粉】</div>\r\n                <div>麵粉(地瓜粉) 適量</div>\r\n                <div>蛋溢 1~2顆</div>\r\n                <div>麵包粉 適量</div>\r\n                <br></br>\r\n                <div>【豬肉醃製】</div>\r\n                <div>鹽巴 適量</div>\r\n                <div>黑胡椒粒 適量</div>\r\n                <br></br>\r\n                <div>【撒粉】</div>\r\n                <div>黃芥末醬 隨意</div>\r\n                <div>胡椒鹽 隨意</div>\r\n                <div>番茄醬 隨意</div>\r\n                <div>烤肉醬 隨意</div>\r\n                <br></br>\r\n                <div>開始料理囉</div>\r\n                <br></br>\r\n                <div>步驟 1</div>\r\n                <div>\r\n                  ①豬肉片用刀背稍微敲打後，用叉子搓洞。(目的是讓豬肉變軟嫩與好入味)\r\n                </div>\r\n                <div>②有肉槌也可以直接用肉槌敲打即可。</div>\r\n                <br></br>\r\n                <div>步驟 2</div>\r\n                <div>\r\n                  ①➕適量鹽巴、黑胡椒粒醃製 (也可以加入些許香料類來醃製)\r\n                </div>\r\n                <br></br>\r\n                <div>步驟 3</div>\r\n                <div>\r\n                  ①高麗菜；切絲後泡冰水 (泡冰水是要增加高麗菜絲的脆度用)\r\n                </div>\r\n                <div>\r\n                  ②豬肉片；醃製完後依序 麵粉>蛋溢>麵包粉，來做沾黏。\r\n                  (再沾黏的過程中，可以稍微按壓一下肉，可以確保粉有沾黏上)\r\n                </div>\r\n                <br></br>\r\n                <div>步驟 4</div>\r\n                <div>①開大火將油鍋燒至160~180度後轉中火</div>\r\n                <div>\r\n                  ❶測油溫可以抓一搓麵包粉丟進去式式看，\r\n                  如果會浮起來有泡泡代表油溫ok，如果沒有就還不夠熱\r\n                </div>\r\n                <div>❷如果油溫太高會冒煙，這時候請轉小火等沒煙再試試看</div>\r\n                <div>❹油鍋會冒煙代表油溫太高，請轉小火，不然很危險！！</div>\r\n                <br></br>\r\n                <div>步驟 5</div>\r\n                <div>\r\n                  ①油溫ok後➕豬排兩面各炸約2分鐘左右至金黃色即可。\r\n                  (可以用筷子搓搓看有沒有熟透，沒有再繼續炸)\r\n                </div>\r\n                <div>②油溫請保持，有泡泡~不會冒煙的熱度(160~180度)</div>\r\n                <div>③再撈起前再轉最大火炸約5~10秒逼油撈起後關火即可上菜。</div>\r\n                <div>小撇步</div>\r\n                <div>\r\n                  ❶敲打豬肉有肉槌的話，可以用肉槌敲打即可。\r\n                  　(敲打目的是要讓肉口感更軟嫩與入味)\r\n                </div>\r\n                <div>❷豬肉沾粉第一層麵粉也可以用其他粉類代替。</div>\r\n                <div>\r\n                  ❸如果想要炸厚一點的話，沾粉的步驟可以多做幾次。\r\n                  　(麵粉>蛋溢>麵粉>蛋溢>麵包粉) 最後沾麵包粉即可\r\n                </div>\r\n                <div>\r\n                  ❹油溫建議保持在160~180度，肉再下鍋前可以先放一小搓\r\n                  麵包粉下去試油溫 有無泡泡，最後起鍋前再開大火逼油即可。\r\n                </div>\r\n                <div>❺油鍋會冒煙代表油溫太高，請轉小火，不然很危險！！</div>', '2019-11-07 00:00:00', 2, '../../assets/images/forum/forum-02.jpg', 36),
(8, '【分享】初學者也學得會的炸豬排！', '4', '派對同樂', 0, 2, '即使是初學者，也可以輕輕鬆鬆做出炸豬排喔~快來試試看幾個簡單的步驟\r\n<br></br>\r\n<div>份量 2 人份/時間 10 分鐘</div>\r\n                <br></br>\r\n                <div>食材</div>\r\n                <div>厚豬肉片 1~2片</div>\r\n                <div>高麗菜絲 適量</div>\r\n                <br></br>\r\n                <div>【豬肉炸粉】</div>\r\n                <div>麵粉(地瓜粉) 適量</div>\r\n                <div>蛋溢 1~2顆</div>\r\n                <div>麵包粉 適量</div>\r\n                <br></br>\r\n                <div>【豬肉醃製】</div>\r\n                <div>鹽巴 適量</div>\r\n                <div>黑胡椒粒 適量</div>\r\n                <br></br>\r\n                <div>【撒粉】</div>\r\n                <div>黃芥末醬 隨意</div>\r\n                <div>胡椒鹽 隨意</div>\r\n                <div>番茄醬 隨意</div>\r\n                <div>烤肉醬 隨意</div>\r\n                <br></br>\r\n                <div>開始料理囉</div>\r\n                <br></br>\r\n                <div>步驟 1</div>\r\n                <div>\r\n                  ①豬肉片用刀背稍微敲打後，用叉子搓洞。(目的是讓豬肉變軟嫩與好入味)\r\n                </div>\r\n                <div>②有肉槌也可以直接用肉槌敲打即可。</div>\r\n                <br></br>\r\n                <div>步驟 2</div>\r\n                <div>\r\n                  ①➕適量鹽巴、黑胡椒粒醃製 (也可以加入些許香料類來醃製)\r\n                </div>\r\n                <br></br>\r\n                <div>步驟 3</div>\r\n                <div>\r\n                  ①高麗菜；切絲後泡冰水 (泡冰水是要增加高麗菜絲的脆度用)\r\n                </div>\r\n                <div>\r\n                  ②豬肉片；醃製完後依序 麵粉>蛋溢>麵包粉，來做沾黏。\r\n                  (再沾黏的過程中，可以稍微按壓一下肉，可以確保粉有沾黏上)\r\n                </div>\r\n                <br></br>\r\n                <div>步驟 4</div>\r\n                <div>①開大火將油鍋燒至160~180度後轉中火</div>\r\n                <div>\r\n                  ❶測油溫可以抓一搓麵包粉丟進去式式看，\r\n                  如果會浮起來有泡泡代表油溫ok，如果沒有就還不夠熱\r\n                </div>\r\n                <div>❷如果油溫太高會冒煙，這時候請轉小火等沒煙再試試看</div>\r\n                <div>❹油鍋會冒煙代表油溫太高，請轉小火，不然很危險！！</div>\r\n                <br></br>\r\n                <div>步驟 5</div>\r\n                <div>\r\n                  ①油溫ok後➕豬排兩面各炸約2分鐘左右至金黃色即可。\r\n                  (可以用筷子搓搓看有沒有熟透，沒有再繼續炸)\r\n                </div>\r\n                <div>②油溫請保持，有泡泡~不會冒煙的熱度(160~180度)</div>\r\n                <div>③再撈起前再轉最大火炸約5~10秒逼油撈起後關火即可上菜。</div>\r\n                <div>小撇步</div>\r\n                <div>\r\n                  ❶敲打豬肉有肉槌的話，可以用肉槌敲打即可。\r\n                  　(敲打目的是要讓肉口感更軟嫩與入味)\r\n                </div>\r\n                <div>❷豬肉沾粉第一層麵粉也可以用其他粉類代替。</div>\r\n                <div>\r\n                  ❸如果想要炸厚一點的話，沾粉的步驟可以多做幾次。\r\n                  　(麵粉>蛋溢>麵粉>蛋溢>麵包粉) 最後沾麵包粉即可\r\n                </div>\r\n                <div>\r\n                  ❹油溫建議保持在160~180度，肉再下鍋前可以先放一小搓\r\n                  麵包粉下去試油溫 有無泡泡，最後起鍋前再開大火逼油即可。\r\n                </div>\r\n                <div>❺油鍋會冒煙代表油溫太高，請轉小火，不然很危險！！</div>', '2019-11-07 00:00:00', 5, '../../assets/images/forum/forum-02.jpg', 34),
(9, '【立冬】吃什麼才能補對身體?', '3', '冬', 0, 0, '<p>立冬補冬，想當然爾就是要吃吃可以讓身體暖和的鍋物，天氣一寒尤其女性身體就很容易出現手腳冰涼，血液循環不好的身體狀況。立冬進補的目的，就是要養護人體中的氣，讓身體保持溫暖，補充身體的陰血。常見的羊肉爐其實就符合了這樣的進補原則，所以羊肉爐當然是冬季進補的最佳食物。也是為什麼羊肉爐總是冬季擠滿人潮嘛～</p><p>&nbsp;</p><h3><strong>薑母鴨</strong></h3><p>&nbsp;</p><p>金帝元薑母鴨羊肉爐 粉絲團</p><p>嫩薑祛濕、老薑驅寒，薑本身就有可對抗發炎、清腸、減輕痙攣和抽筋，及刺激血液循環。是一種強的抗氧化劑，加入鴨肉燉煮成鍋料理，既能喝薑湯去寒，也能吃肉補充一年來的辛勞喪失的體力，更能可保護肝臟和胃，對治療腸道疾病、血液循環問題，但因為薑較為燥熱，立冬進補可記得要適量食用。</p><h3>&nbsp;</h3><h3><strong>雞湯</strong></h3><p>&nbsp;</p><p>圖片來源：馨味薑母鴨 粉絲團</p><p>雞肉和其他肉類相比，營養成分比較突出，其蛋白質購但卻擁有較少脂肪，是肉類蛋白質的最佳來源之稱，雞肉經過加熱煮熟後，其富含的水溶性營養成分溶解到雞湯中，故為何總是說雞湯能有效補氣，增強體力，在立冬之後、特別是寒流來襲，喝雞湯有助於提高自身免疫力，像是感冒期間喝雞湯可以有效的改善一些感冒的症狀，比如說流鼻涕，喉嚨痛等，可有效的抑制人體內的發炎狀況喔。</p><p>&nbsp;</p><h3><strong>柚子</strong></h3><p>柚子味甘酸、性寒，具有溫和化痰、潤肺清腸、補血健脾等功效，是冬季養肺和緩解感冒後咳嗽的良好水果，在咳嗽時泡杯柚子茶，就能有效的止咳，柚肉中含豐富的類胰島素成分，更能降血糖、降血脂，也因富含維他命c還兼具養顏美容之功效，是最具食療效益的水果之一。</p><p>&nbsp;</p><h3><strong>栗子</strong></h3><p>栗子中栗子是碳水化合物含量較高的干果品種，能供給人體較多的熱能，並能幫助脂肪代謝，也含有植物性蛋白質、脂肪、B族維生素等多種營養素可有效地預防和治療高血壓、冠心病、動脈硬化等心血管疾病，在冬季容易有心血管問題的長輩，多吃栗子也能預防心血管疾病，迎接寒冷的立冬到來也不怕啦～</p><h2><strong>立冬進補請注意&nbsp; &nbsp; 蔬菜水果簡單最美味</strong></h2><p>其實除了上述的水果和進補鍋物之外，還有一些食物很適合立冬或冬季來吃一下。例如紅棗（可補血補氣，對於氣血不足、貧血、肺虛咳嗽、神經衰弱、失眠、高血壓等病症有益）、白蘿蔔（俗話說，冬吃蘿蔔夏吃薑，不勞醫生開藥方。可以增加免疫力）、豆腐、木耳、鮮魚等。</p><p>不過進補必須審視自己的體質，有必要請諮詢中醫師，進補分為清補、溫補、小補、大補，如果體質寒涼者，必須將涼性食材和溫補食材一起燉煮，例如蘿蔔燉羊肉等。同時不可飲酒過量、也應該避免生冷食物，這個時間點對於胃病患者來說需要特別小心。</p>', '2019-11-25 11:19:27', 2, 'http://localhost:6003/images/forum/1/55a2ab02db672bc26b08eccb6d85995f.jpg', 4),
(10, '【立冬】立冬就該養生準沒錯!', '3', '冬', 0, 0, '<p>立冬這天，到底吃什麼好？彭溫雅建議，<strong>吃葷的民眾可以吃羊肉進補，因為羊肉屬於溫補食材，對於秋冬流感季節而言，有潤肺、補腎氣的效果</strong>，若是不喜歡羊騷味，可以先川燙過，並用沙茶、咖哩等口味較重的方式料理。</p><p><strong>吃素的民眾則推薦用四神湯進補，其中的茯苓、芡實、蓮子、山藥和薏仁等都是補脾胃的食材</strong>，彭溫雅也坦言自己立冬進補就會選擇平補的四神湯，「其實一般民眾喝四神湯就足夠，不一定要吃到溫補的藥燉排骨、薑母鴨。」另外，若是民眾不喜歡中藥味，彭溫雅推薦可以買新鮮山藥燉排骨，喝山藥排骨湯也是不錯的選擇。</p><p>但彭溫雅提醒，進補必須依照個人體質調整，以免出現身體不適，像是身體偏虛寒、手腳冰冷的民眾較適合進補，「<strong>若是民眾在吃了薑母鴨、羊肉爐、麻油雞等補湯之後，出現長痘、掉髮、頭油、嘴破、流鼻血或便秘等上火症狀，就表示太過燥熱，應該停止進補。</strong>」</p><p>值得注意的是，平時不愛喝水的民眾也不適合藥膳食補，彭溫雅提醒，由於藥膳補湯鉀含量偏高，會幫助排水，造成身體更乾燥，恐出現乾咳、便秘、皮膚乾燥搔癢等症狀。</p><p>另外，補湯久滾恐產生大量嘌呤(普林)溶解在湯中，有痛風的民眾得避免，彭溫雅強調，「要是藥膳補湯搭配啤酒，又食用鴨血等內臟類及大量肉類，對痛風患者來說絕對是大忌！」</p><p>「<strong>痛風、腎功能不好、有結石或是三高的民眾，在進補時要小心，酌量攝取、避免喝湯</strong>，」至於一般民眾，彭溫雅強調­­「份量是關鍵」，建議可再搭配涼性食物，像是白菜、水梨、涼拌毛豆、白蘿蔔等，平衡補湯的躁熱，且最好多煮點蔬菜、菇類取代肉類，降低熱量，也能減少身體負擔。</p>', '2019-11-25 11:23:17', 1, 'http://localhost:6003/images/forum/1/3277352aa7d177335de6de581ac9edba.jpg', 3),
(11, '【閒聊】夏天熱到吃不下怎麼辦?', '3', '夏', 0, 0, '<p>天氣又悶又熱，做什麼事情都提不起勁，只想賴在床上放空吹冷氣嗎？除了靠意志力努力叫自己打起精神外，有沒有能提神的好方法呢？當然有，快來偷學營養師的提神飲食法，只要吃這5種食物，一整天都能充滿活力！</p><p>&nbsp;</p><p>夏天代謝、排汗快 輕微中暑易倦怠</p><p>&nbsp;</p><p>台灣的夏天動輒超過30度，別說從事戶外運動，連出門買個便當都熱到頭昏，恨不得馬上衝進冷氣房，配上一碗沁涼刨冰解暑。不過，夏天溫度高使身體排汗、代謝加速，水分和電解質流失，容易造成輕微脫水，而吃冰消暑或是從高溫中馬上進入冷氣房，則會導致血管收縮，使得體內高熱沒辦法透過汗水蒸散一併排出。</p><p>&nbsp;</p><p>1.白開水</p><p>就算不口渴，沒事也要多喝水！當出現口渴症狀，代表身體已經處於輕微脫水階段了，脫水會降低生理及心理功能，輕微的脫水即可能造成疲倦，甚至是頭昏、頭痛等症狀。因此，不論外出或在家都應該時時補充水分，至於一天的喝水量，建議用體重乘以40毫升（例：50公斤X40毫升＝2000毫升）白開水最佳。</p><p>&nbsp;</p><p>2.黑巧克力</p><p>黑巧克力香濃可口，咬一口就能感受到幸福滋味，使精神飽滿，更富含能夠提振精神的「黃烷醇」，黃烷醇能促進血管擴張，增加大腦血流量，讓腦袋運轉更流暢，思緒清晰不疲倦。</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>', '2019-11-25 11:27:41', 1, 'http://localhost:6003/images/forum/1/cb17d9329b8612ac0f9bda7344920840.jpg', 3),
(13, '【閒聊】秋蟹季節到~為什麼秋天適合吃螃蟹', '3', '秋', 0, 0, '<p>每年秋天，是品嚐螃蟹的最好時節，因為這時候的螃蟹正值繁殖季節，有著最佳的豐腴體態，個個蟹肥膏黃讓人垂涎。而緊鄰太平洋的北海岸，一直以來都是饕客們品嘗海鮮的首選地，尤其是秋季，上門品蟹吃海鮮的人潮更是絡繹不絕。<br><br>為什麼秋天的螃蟹最好吃？有人說秋天是螃蟹產卵的季節，也有人說時令入秋，海水逐漸變冷，螃蟹要儲存能量準備過冬，所以身上的蟹黃蟹膏特別肥美。雖說一年四季都有螃蟹可吃，但只有在這個時候，螃蟹肉 厚鮮甜，蟹黃蟹膏濃郁，能吃一次知名的陽澄湖大閘蟹，再配酒賞菊，被視為文人雅士秋日的最佳活動。<br>&nbsp;</p><h3>秋天吃螃蟹有什麼好處?</h3><p>&nbsp;</p><p>秋天吃螃蟹的好處：<br><br>蟹肉有高蛋白質、低脂肪的特質，且富含中維生素A、維生素E、鈣、鎂、硒、碘等天然營養成分。<br><br>1.蟹肉的優質蛋白高於燕窩<br><br>蟹肉中的蛋白質屬於優質蛋白，而且特別容易消化吸收，且蛋白質含有人體必需胺基酸，所以鮮美的蟹肉不只滿足味蕾，還是很營養的自然食材。甚至蟹肉的優質蛋白含量高於燕窩補品！<br><br>2.蟹肉的維生素A、維生素E含量特別高<br><br>維生素A有助於維持在暗處的視覺，增進皮膚與黏膜的健康、幫助牙齒與骨骼的發育生長。<br><br>維生素E可減少不飽和脂肪酸的氧化，增進皮膚及血球的健康。<br><br>螃蟹在古時即是珍貴的食材，高營養價值讓螃蟹被視為秋天進補的好料理，至於螃蟹性寒或膽固醇的問題，聰明的饕客還是有應變之道。<br><br><br><br>&nbsp;</p><h3>秋天聰明吃螃蟹</h3><p><br>不管是大閘蟹、帝王蟹、沙公、沙母、花蟹...各式各樣的螃蟹，饕客們都會遇到不能盡情大吃的情況，因為螃蟹本身性質較寒，加上有膽固醇的疑慮，讓人不能完全放心大口吃螃蟹，但是只要掌握幾個原則，就可以安心吃螃蟹囉！<br><br><br>1、吃蟹加些新鮮薑末和食醋。<br><br>生薑和醋除了可以讓蟹味更鮮美，也可以調和蟹肉性寒的特質。<br><br>2、不吃死蟹。<br><br>所有的食材都應該挑選新鮮的，尤其河蟹更要注意新鮮度。<br><br>3、吃蟹要適量，搭配有講究。<br><br>吃蟹時和吃蟹後1小時內不要喝茶。因為開水會沖淡胃酸，茶會使蟹的某些成分凝固，不利於消化吸收。<br><br>農民曆也說蟹肉不能和柿子一起吃，以免引起過敏、腹瀉。<br><br>4、現蒸現吃，不要存放<br>若吃不完，剩下的一定要保存在干淨、陰涼通風的地方，吃時必須回鍋再煮熟蒸透。<br><br>&nbsp;</p>', '2019-11-25 11:31:21', 1, 'http://localhost:6003/images/forum/1/cbeeda00ca1bcf03438277b93735a5c3.jpg', 4),
(14, '入秋養生除秋燥！中醫師推薦養肺食物', '3', '秋', 0, 0, '<p>秋天，天氣轉涼，又帶了點萬物蕭條寂靜感，是大啖美味食物的季節，也是適合養生的季節。</p><p>揮別了溽暑，接著即將迎來較為乾燥的秋季，空氣中的相對濕度逐漸下降。</p><p>那天 Jamie 和中醫師朋友聊天，他提到秋天主「燥」，此時對於呼吸系統、免疫系統較差者，容易出現過敏感冒症狀，或是 皮膚乾癢、蕁麻疹、過敏性皮膚炎…等，都是好發作期。</p><p><strong>在中醫學上，習慣稱呼這段期間為「秋燥」，而秋燥容易造成：口乾舌燥、鼻咽乾燥，乾咳、過敏性咳嗽、乾燥搔癢…等症狀。</strong></p><p>因為 肺氣與秋天相應，肺在中醫學上與 皮毛、呼吸習習相關，才會好發皮膚及呼吸道疾病，加上入秋後，人體的新陳代謝跟夏天相比也跟著變慢。</p><p>那究竟該如何對抗「秋燥」呢？ 別擔心，跟中醫師朋友請益了一番，整理了下列 5 大秋天養生養肺食物與大家分享，一起入秋健康養生！</p><p>&nbsp;</p><h3><strong>秋天養肺養生食物推薦 1 ：蜂蜜</strong></h3><blockquote><p>蜂蜜，是很方便的潤燥養生食物，對於補脾肺氣、潤肺止咳、潤腸通便都有不錯的功效，也對於皮膚的光澤有幫助。</p><p>貼心提醒：無痰的乾咳，蜂蜜可潤肺止咳，但若是多痰的咳嗽，就不適合食用蜂蜜，反而更生痰喔。</p></blockquote><h3><strong>秋天養肺養生食物推薦 2 ：南瓜</strong></h3><blockquote><p>南瓜，這個食物具有潤燥的養生功效，也是能帶來飽腹感的食物，滿適合在秋天時偶爾代替主食喔！</p><p>加上南瓜富含β–胡蘿蔔素，經體內吸收代謝後會轉變為維生素A，維生素A可以保護鼻、喉、肺等呼吸道黏膜的健康，促進黏液的分泌，增強機體免疫功能，在秋天食用可說是好處多多～</p></blockquote><h3><strong>秋天養肺養生食物推薦 3 ：蓮藕</strong></h3><blockquote><p>以中醫學觀點來看，生藕 和 熟藕 這兩樣食物各具有不同的養生功效。</p><p>生藕：適用於口乾舌燥及火氣大的人食用，可榨汁添加蜂蜜飲用。</p><p>熟藕：適合胃腸虛弱、消化不良的人食用，入菜或煮熱蓮藕茶都很好。</p><p><i>貼心提醒：有些人不宜吃太多蓮藕！</i><br><i>e.g. 糖尿病患者、消化道潰瘍、易脹氣者、大腸激躁症者；另外，女生生理期不適合吃生藕 (屬性較寒)。</i></p></blockquote><h3><strong>秋天養肺養生食物推薦 4 ：梨子</strong></h3><blockquote><p>梨子，這樣食物能潤肺止咳、清熱解毒，對於秋燥引起的乾咳、口渴和便秘的效果都不錯。</p><p>梨子汁也是許多戲曲家、演唱家保護嗓音的小秘密，新鮮榨梨汁很滋潤養喉。</p><p>而且<i>梨子添加</i>蜂蜜、冰糖、川貝母燉煮，立馬搖身一半成為很棒得甜品，對於緩解咳嗽也是很有幫助的喔！</p><p><i>貼心提醒：脾胃弱者不宜多吃！</i><br><i>梨子直接當水果吃、榨汁都很棒，也可以加入蜂蜜滋潤效果更好～</i></p></blockquote><h3><strong>秋天養肺養生食物推薦 5 ：銀耳</strong></h3><blockquote><p>銀耳，富含豐富的氨基酸，可潤肺生津，對於緩解皮膚的搔癢、乾燥症狀。</p><p>自古人們就經常食用銀耳這樣食物，又有「素食的燕窩」之美名，拿來做甜湯、入菜都很合適，在秋天時作為養生的食物代表之一，真的是不分年齡都適合補充的養生聖品。</p></blockquote><p>雖然現在白天時，大家仍時常感覺到夏天似乎尚未遠去～</p><p>但隨著夜幕低垂，應該也已感受到幾分秋天的氣息，告別中秋，秋天已悄悄捎來信息。</p>', '2019-11-25 11:35:36', 1, 'http://localhost:6003/images/forum/1/cddd027f0228a170000f655af24af056.jpg', 3),
(15, '【閒聊】春天到了！該如何養生呢？', '3', '春', 0, 0, '<p>古書說︰「春傷於風，夏必飧泄」。意思是說，春天受到風寒，夏天就容易產生脾虛的症狀與疾病，因此要預防風邪之氣對人體脾胃功能的影響，並且要適時提升陽氣，避免風寒感冒。</p><p>&nbsp;</p><h2><strong>【春天養生要點】&nbsp;</strong></h2><p>&nbsp;</p><p>1. 多食養肝食物：白芝麻、黑芝麻、杏鮑菇、香菇、油菜、空心菜、綠豆芽、筊白筍、木瓜、水蜜桃、奇異果、棗子、石斑魚、鰻魚、鱈魚、韭菜…等。</p><p>&nbsp;</p><p>2. 疏肝解鬱：平時至公園環抱樹木，能補充肝木之氣，疏肝解鬱。</p><p>&nbsp;</p><p>3. 升發陽氣，防風邪︰早上梳頭 100 下，傍晚走路運動半小時。</p><p>&nbsp;</p><p>4. 充足睡眠：不要熬夜，子時 (晚上 11 點～凌晨 1 點)為肝經氣血旺盛之時，這段時間請入睡，並睡滿 6 ～ 7 個半小時。</p><p>&nbsp;</p><p>5. 補充水份：春天乾燥的天氣容易消耗掉人體內的水分，容易出現急躁、上火等症狀，需時常補充水份。</p><p>&nbsp;</p><h2><strong>【飲食建議】</strong>&nbsp;</h2><p>&nbsp;</p><p>忌食：辛辣、刺激性食物，例如：薑母鴨、麻油雞、羊肉爐、麻辣火鍋、燒酒雞、炸物、麻 油、薑等。</p><p>&nbsp;</p><p>宜吃：紅棗、葵瓜子、葡萄、蘿蔔、山楂、豬肝、白芝麻、開心果、燕麥、杏鮑菇、菠菜 等…，也可多吃青綠色食物及酸味食物有助於養肝。(酸味食物多食容易傷齒、胃，故適量即可)</p><p>&nbsp;</p><h2><strong>【保養茶飲】&nbsp;</strong></h2><p>&nbsp;</p><p>1. 黃耆 5 公克、枸杞 5 公克、黨蔘 5 公克，煮 1500 毫升的水當開水喝。</p><p>&nbsp;</p><p>2. 用菊花三錢、枸杞一兩煮 1000 C.C.的水當開水喝</p><p>&nbsp;</p>', '2019-11-25 11:55:36', 1, 'http://localhost:6003/images/forum/1/ac781fb9e0c9d9b758b92930c3ba2754.jpg', 1),
(16, '【閒聊】中醫談冬季養生', '3', '冬', 0, 0, '<p>天地萬物經數百萬年的演化，依循四季氣候變化，衍生出一套最佳生存模式，「春生、夏長、秋收、冬藏」。中醫先賢們自知身為天地間的後起之秀，謙卑地觀察並學習這套生存模式進而調整生活作息，這就是中醫養生學的基礎。</p><p>依中醫養生觀，冬季是萬物收藏的季節，其氣候主寒。天地間，枯枝漫天，蟲獸冬眠。萬物盡量地減少能量散失，以等待著明年春天的生機。台灣地處熱帶與亞熱帶氣候地區之間，冬季天氣雖不至於冰天雪地，隨著頻繁的冷氣團襲來，每日晨間驟降的溫度，人們的生活作息當然也必須有所調整。</p><p>作息上，應早睡晚起，避開早晚低溫的時段，晨間的活動建議可等太陽露臉再說，且要預防性的加強早晚保暖工作，尤其是年長者。臨床觀察，許多心血管疾病常發生在這些時段，不可忽視。</p><p>活動上，運動不宜過度，求輕求緩，最忌諱運動後大汗淋漓，導致風寒從毛孔入裡，輕則頭痛感冒，重則導致五臟寒症。但因此而避開運動亦不好，冬季的寒邪常會凝滯末梢血液循環、繃緊筋肉，適當選擇輕度有氧或健康操才是上策。</p><p>飲食上，在這萬物藏收的季節裡特別適宜人體藏陰斂陽，可多選用入腎的食材，如羊肉、核桃、黑芝麻、黑豆、黑木耳。另外，選擇適當的冬令進補可以為明年的健康生長打下基礎。尤其是溫補的藥膳能補充人體能量，更是直接幫助身體對抗冬天的寒氣，使人得以健康度過寒冬。這在過去營養及醫療條件不充裕的年代是非常重要的，也因此補冬的觀念才會在傳統台灣社會中如此根深蒂固。</p><p>另外，常見補冬所用的配方如薑母鴨、當歸羊肉湯、十全大補湯、八珍湯、藥燉排骨，幾乎都是溫補為主的藥膳。這在過去的時空背景下是很適合冬日進補的，補充了優質的蛋白質又搭配祛寒補中的中藥成分。但現代人營養過剩，應酬熬夜，勞心工作，這樣的時空背景造成現代人熱性體質越來越多，常口乾舌燥、怕熱易汗、便秘、反復嘴破，此時就該改選用不容易上火的平補藥膳，比如四神湯，四君子湯等。尤其冬季剛好是年終歲末聚餐很多的時段，聖誕大餐、跨年趴、年夜飯、尾牙、春酒，餐餐大魚大肉，連續下來腸胃常常不堪負荷，此時配合四神、四君子湯健胃補脾的功效，除了補氣養生也可有效改善腸胃症狀。</p><p>冬令進補雖是冬季養生一大重頭戲，但進補前建議可先簡單判斷或諮詢正規中醫師，了解自己體質偏性，再搭配前述冬季生活作息調整，才能補對地方， 健康過個好冬。</p>', '2019-11-25 12:02:26', 1, 'http://localhost:6003/images/forum/1/b570cc051de361771d83d36ce76889e9.jpg', 3),
(17, '【分享】清新鮮橙沙律', '1', '派對同樂', 43, 37, '<p>鮮橙沙律配上士多啤梨，眼睛先食已經心情大好；而鮮橙汁配上意大利黑醋竟然出奇地夾，酸酸甜甜味道非常平衡，做法簡單，但令人想食「回頭草」的機率超高～&nbsp;<br>&nbsp;</p><p>份量 2 人份/時間 15分鐘</p><p>食材</p><p>鮮橙 1 個</p><p>士多啤梨 8 粒</p><p>沙律菜 1 包</p><p>&nbsp;</p><p>調味料</p><p>鮮橙汁 80 ml</p><p>意大利濃黑醋 3 湯匙</p><p>特級初榨橄欖油 2 湯匙</p><p>岩鹽 少量</p><p>黑胡椒 少量</p><p>&nbsp;</p><p>第1步</p><p>沙律菜洗淨後用去水器弄乾，鮮橙去皮去薄衣切件，士多啤梨去蒂洗淨切片備用</p><p>&nbsp;</p><p>第2步</p><p>將食材跟鮮橙汁、意大利濃黑醋、特級初榨橄欖油完全混合</p><p>&nbsp;</p><p>第3步</p><p>最後加上岩鹽及黑胡椒調味即可</p>', '2019-11-25 12:15:24', 5, 'http://localhost:6003/images/forum/1/5d3ff4e8f9d361fbd694e9e6b5a0081c.jpg', 244),
(20, '【分享】無水醬燒杏鮑菇', '1', '入冬滋補', 12, 17, '<p>這是一個無水煮食的食譜，即烹調過程中產生的蒸氣留在鑊中，熱力在鑊中不斷循環，從而煮熟食材及保持食材水份。</p><p>&nbsp;</p><p>材料</p><p>&nbsp;</p><p>杏鮑菇 3 條</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>調味料</p><p>&nbsp;</p><p>醬油 2 湯匙</p><p>&nbsp;</p><p>麻油 少許</p><p>&nbsp;</p><p>米酒 1 茶匙</p><p>&nbsp;</p><p>薑汁 1 湯匙</p><p>&nbsp;</p><p>水 1 湯匙</p><p>&nbsp;</p><p>糖 1 茶匙</p><p>&nbsp;</p><p>黑胡椒 少許</p><p>&nbsp;</p><p>味醂 3 湯匙</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>第1步</p><p>&nbsp;</p><p>開細火，塗少許油在鑊上，加入杏鮑菇，蓋上蓋煮5-7分鐘。開蓋翻轉杏鮑菇，把蓋蓋上再煮5-7分鐘。</p><p>&nbsp;</p><p>第2步</p><p>&nbsp;</p><p>拌勻調味料後，倒在杏鮑菇上，煮5分鐘，直至輕微收汁及略稠便可。</p><p>&nbsp;</p><p>第3步</p><p>&nbsp;</p><p>熄火待涼，杏鮑菇切片及淋上醬汁即成。</p>', '2019-11-25 13:40:55', 2, 'http://localhost:6003/images/forum/1/763c65a85a8f6c0bb4a4540df23aab1f.jpg', 102),
(22, '【分享】香橙甘荀洋蔥濃湯', '1', '人氣主題', 3, 3, '<p>荳奶濃湯加橙皮，乍聽之下非常古怪，但口感卻出奇清新，已經喝厭西式素湯的朋友，不訪一試～</p><p>&nbsp;</p><p>材料</p><p>&nbsp;</p><p>甘筍250 克</p><p>洋蔥 1 個</p><p>牛番茄 1 個</p><p>鮮橙皮 半 個</p><p>水 1 公升</p><p>無糖荳奶 250 毫升</p><p>&nbsp;</p><p>調味料</p><p>蒜 2 瓣</p><p>薑 2 片</p><p>香葉 1 片</p><p>&nbsp;</p><p><strong>第1步</strong></p><p>以橄欖油大火爆炒薑、蒜及洋蔥</p><p>&nbsp;</p><p><strong>第2步</strong></p><p>洋蔥炒軟後加入甘筍，略炒後加入番茄繼續炒1分鐘</p><p><strong>第3步</strong></p><p>加水及香葉，水滾後轉中火加蓋燜煮15分鐘</p><p>&nbsp;</p><p><strong>第4步</strong></p><p>關火，取走香葉及薑片，用手提攪拌機將所有食材打成泥；或待冷卻後倒進攪拌器攪碎，再倒回煲中</p><p>&nbsp;</p><p><strong>第5步</strong></p><p>重新開火，加入無糖荳奶及橙皮，中火慢煮約3分鐘，不時攪拌以防黏底</p><p>&nbsp;</p><p><strong>第6步</strong></p><p>最後以鹽及黑胡椒調味（食材外），食用前取走橙皮</p>', '2019-11-25 13:45:55', 2, 'http://localhost:6003/images/forum/1/72f2e88715ef32627af29aaad67d6a78.jpg', 25),
(23, '【分享】藜麥豆腐漢堡', '1', '人氣主題', 2, 2, '<p>豆腐和藜麥做成的漢堡帶有食材的清香味，沒有油膩感，而且藜麥容易消化。</p><p>&nbsp;</p><p>材料</p><p>藜麥 200 克</p><p>硬豆腐 (壓碎) 200 克</p><p>甘筍 (刨絲) 50 克</p><p>洋蔥 (切粒) 100 克</p><p>蛋白 1 隻</p><p>麵粉 1 湯匙</p><p>意大利黑醋 適量</p><p>沙律菜適量</p><p>&nbsp;</p><p>調味料</p><p>菜油1 湯匙</p><p>意大利番茜 (切碎)1 湯匙</p><p>糖¼ 茶匙</p><p>鹽¼ 茶匙</p><p>黑胡椒¼ 茶匙</p><p>&nbsp;</p><p><strong>第1步</strong></p><p>藜麥用水浸1小時。隔走水分，隔水蒸30分鐘。</p><p>&nbsp;</p><p><strong>第2步</strong></p><p>在容器內加入藜麥，豆腐、甘筍、洋蔥、蛋白、麵粉及調味料拌勻。</p><p>&nbsp;</p><p><strong>第3步</strong></p><p>用手搓成漢堡形狀，放雪櫃30-60分鐘至硬身。</p><p>&nbsp;</p><p><strong>第4步</strong></p><p>燒熱平底鑊，以中火將兩邊煎至金黃色，淋上意大利黑醋及以沙律菜伴碟即成。</p>', '2019-11-25 13:50:30', 1, 'http://localhost:6003/images/forum/1/2248d256648a7fbc4422d2e4299f78ef.png', 18),
(24, '【分享】羅勒牛油果醬螺絲粉', '1', '人氣主題', 2, 2, '<p>15分鐘快煮意，簡易有營又美味，兼且可以做翌日午餐盒 - 帶飯。這個清新羅勒牛油果醬螺絲粉，無論你是否牛油果控(我是呀)，都會一試愛上呢！&nbsp;</p><p><br>材料</p><p>螺絲粉 3人</p><p>沙律菜 4 量杯</p><p>牛油果粒 1-2 個</p><p>芡汁</p><p>&nbsp;</p><p>羅勒牛油果醬材料:</p><p>牛油果 1 個</p><p>紅洋蔥 1/4 小個</p><p>蒜頭 2 辧</p><p>新鮮羅勒葉 6 大片</p><p>檸檬汁 1/2 個</p><p>橄欖油 70 克</p><p>鹽和黑胡椒碎 適量</p><p>&nbsp;</p><p>做法</p><p><strong>第1步</strong></p><p>用鍋煲滾水，加少許鹽，放入螺絲粉煮熟 (根據包裝上的時間指示)，煮好後隔去水，備用</p><p><strong>第2步</strong></p><p>沙律菜洗淨，牛油果切粒，備用</p><p><strong>第3步</strong></p><p>將羅勒牛油果醬的全部材料用攪拌機打勻</p><p><strong>第4步</strong></p><p>食時沙律菜先上碟，之後放上螺絲粉和牛油果粒，再淋上羅勒牛油果醬，灑上黑胡椒碎，即成</p>', '2019-11-25 13:56:21', 1, 'http://localhost:6003/images/forum/1/92893df3b6bd32183409f1030aa2ce05.jpg', 16),
(25, '【分享】金沙南瓜', '1', '人氣主題', 1, 1, '<p>蔬菜也可以很冶味！ 香甜南瓜配上蛋黄的咸香， 加上口感外脆內軟， 自己做比在餐廳吃實在便宜太多了！</p><p>&nbsp;</p><p>材料</p><p>南瓜 半 個</p><p>咸蛋黃 2 隻</p><p>麵粉 4 湯匙</p><p>清水 100 毫升</p><p>油 1 湯匙</p><p>&nbsp;</p><p>做法</p><p><strong>第1步</strong></p><p>咸蛋黄隔水蒸約15分鐘，趁熱用叉壓碎。</p><p>&nbsp;</p><p><strong>第2步</strong></p><p>南瓜去皮去籽，切成約半厘米厚薄片，加入少許乾麵粉拌匀。拌匀麵粉、水和油成粉漿備用。</p><p>&nbsp;</p><p><strong>第3步</strong></p><p>燒熱油鍋，插進筷子有小氣泡即成。南瓜沾上粉漿後落鍋，以中至小火炸至金黄色，撈起以廚房紙吸走多餘油份。</p><p>&nbsp;</p><p><strong>第4步</strong></p><p>用一隻乾淨的鑊放約2湯匙油，加入咸蛋黄茸，慢火將咸蛋黄推至溶化及微微起泡。</p><p>&nbsp;</p><p><strong>第5步</strong></p><p>南瓜回鑊，用中至慢火炒至蛋黃完全包裹南瓜即成。</p>', '2019-11-25 13:59:08', 1, 'http://localhost:6003/images/forum/1/99cafaee639f132985ed0c8cd46755c0.jpg', 9),
(26, '【分享】印度香料薯仔炒飯', '1', '人氣主題', 0, 0, '<p>其實懂得運用香料，平平無奇嘅材料都可以做到色香味俱全，異國風味嘅菜式 ！ 炒飯加入了炒香薯仔粒是靈魂，另外也加了少許檸檬汁，令濃郁咖哩香中又帶點清新，平衡整個味道。</p><p>&nbsp;</p><p>材料</p><p>椰菜花 200 克</p><p>薯仔約 5 小個</p><p>青、紅、黃燈籠椒 各 1/2 個</p><p>急凍青豆 150 克</p><p>水 1/2 量杯</p><p>洋蔥 1 個</p><p>薑茸 1/2 湯匙</p><p>蒜頭 4 辧</p><p>米 3 量杯</p><p>&nbsp;</p><p>調味料</p><p>孜然粉 1/2 茶匙</p><p>芫茜粉 1 茶匙</p><p>*Tandoori 印度唐多里咖哩粉1 茶匙&nbsp;</p><p>煙紅椒粉1/2 茶匙</p><p>*Cayenne卡宴辣椒粉 1/2 茶匙</p><p>檸檬汁 1/2 個</p><p>鹽 調味</p><p>&nbsp;</p><p>做法</p><p><strong>第1步</strong></p><p>3量杯米用約兩量杯多些少水煮成飯，備用。或直接用隔夜冷飯</p><p><strong>第2步</strong></p><p>椰菜花、燈籠椒和洋蔥切粒，薑和蒜頭磨茸，薯仔切粒後用水沖洗去除多餘澱粉，然後印乾水</p><p><strong>第3步</strong></p><p>中火燒熱油，下薯仔粒炒熟至金黃色，盛起備用</p><p><strong>第4步</strong></p><p>用中火在油鑊中，先略炒洋蔥，然後下蒜茸及薑茸 ，炒香</p><p><strong>第5步</strong></p><p>下椰菜花略炒，加入孜然粉、芫茜粉、Tandoori 印度唐多里咖哩粉、 煙紅椒粉和Cayenne卡宴辣椒粉，將全部炒香。之後加入1/2量杯水，炒熟椰菜花至微軟身</p><p><strong>第6步</strong></p><p>加入急凍青豆和燈籠椒，快炒。不用太久，否則蔬菜太稔爛不好吃</p><p><strong>第7步</strong></p><p>加入飯，兜勻</p><p><strong>第8步</strong></p><p>最後加入再先前已炒香的薯仔，兜勻。下檸檬汁和鹽調味，完成！</p>', '2019-11-25 14:02:37', 1, 'http://localhost:6003/images/forum/1/d590d4f7fa24aa8e7ce5e186f42a52ad.jpg', 3),
(27, '【分享】香濃南瓜椰奶湯', '1', '人氣主題', 0, 0, '<p>用椰奶代替鮮奶或忌廉烹調的南瓜濃湯少了油膩感，卻多了一份椰香味。</p><p>&nbsp;</p><p>材料</p><p>南瓜 (切粒) 1 公斤</p><p>番薯 (切粒) 1 個</p><p>洋蔥 (切粒) ½ 個</p><p>水 1 公升</p><p>椰奶 100 毫升</p><p>&nbsp;</p><p>調味料</p><p>鹽 適量</p><p>橄欖油 少許</p><p>牛油 15克</p><p>紅椒粉 少許</p><p>黑胡椒碎 少許</p><p>百里香 少許</p><p>&nbsp;</p><p><strong>做法</strong></p><p>&nbsp;</p><p><strong>第1步</strong></p><p>大火燒熱鍋，下橄欖油將洋蔥和百里香爆香。加入南瓜和番薯，炒勻後加入牛油和水，轉中火加蓋煮30分鐘。</p><p>&nbsp;</p><p><strong>第2步</strong></p><p>用攪拌器把材料打至順滑，加入椰奶。煮滾後，加入鹽和黑胡椒碎調味，最後以少許椰奶及紅椒粉作點綴即成。</p>', '2019-11-25 14:05:30', 1, 'http://localhost:6003/images/forum/1/824b3f1022d5e495211200f7b14a1006.jpg', 5),
(28, '【分享】南瓜咖哩醬天貝', '1', '人氣主題', 1, 1, '<p>將南瓜蓉煮成咖哩醬汁，南瓜的鮮甜柔和地提升了咖哩的辛香，配以含豐富蛋白質的天貝，一道簡易菜式，色香味營養俱全！</p><p>&nbsp;</p><p>材料</p><p>南瓜咖哩醬汁材料:</p><p>南瓜 550 克</p><p>洋蔥 1/2 個</p><p>咖哩粉 1 湯匙</p><p>水 500 克</p><p>椰槳 140 克</p><p>鹽 適量</p><p>&nbsp;</p><p>調味料</p><p>天貝調味料:</p><p>天貝 400 克</p><p>孜然粉 1 茶匙</p><p>薑粉 1 茶匙</p><p>咖哩粉 1 茶匙</p><p>鹽 1/2 茶匙</p><p>蘋果醋 1湯匙</p><p>&nbsp;</p><p><strong>做法</strong></p><p><strong>第1步</strong></p><p>天貝切粒，加入已混合的調味料，拌勻，然後醃1小時</p><p><strong>第2步</strong></p><p>南瓜和洋蔥切細</p><p><strong>第3步</strong></p><p>中火燒熱油，將洋蔥爆香，然後加入咖哩粉略炒香，接著下南瓜略炒，加入水，蓋上鑊蓋，煮約10分鐘</p><p><strong>第4步</strong></p><p>南瓜煮熟至軟腍後，用鑊鏟或壓薯蓉器，直接在鑊將南瓜壓成蓉</p><p><strong>第5步</strong></p><p>加入天貝和椰槳拌勻，再煮約7分鐘，最後加入鹽調味，即成 !</p>', '2019-11-25 14:08:27', 1, 'http://localhost:6003/images/forum/1/cef004ff49d2c428c7a2d6168aedfe52.jpg', 11),
(29, '【分享】甜瓜的需肥、施肥以及追肥技術！', '4', '閒聊', 0, 0, '<p>甜瓜的需肥、施肥以及追肥技術！跟隨著我一起來了解吧！<br>&nbsp;</p><p><strong>1、需肥特點：</strong></p><p>甜瓜需肥量大，對養分吸收以幼苗期吸肥最少，開花後氮、磷、鉀吸收量逐漸增加，氮、鉀吸收高峰約在坐果後16~17天，坐果後26~27天就急劇下降。磷、鈣吸收高峰在坐果後26~27天，並延續至果實成熟。開花到果實膨大末期的1個月左右時間內，是甜瓜吸收礦質養分最多的時期，也是肥料的最大效率期。鈣和硼不僅影響果實糖分含量，而且影響果實外觀，鈣不足時，果實表面網紋粗糙，泛白，缺硼時果肉易出現褐色斑點。甜瓜為忌氯作物，不宜施用氯化銨、氯化鉀等肥料。</p><p>&nbsp;</p><p><strong>2、施肥技術：</strong></p><p>中等肥力水平下甜瓜全生育周期畝施肥量為有機肥3000-3500千克（或商品有機肥400-450千克），氮肥18-21千克、磷肥6-8千克、鉀肥8-10千克。有機肥做基肥，氮、鉀肥分基肥和三次追施，磷肥全部基施，化肥和農家肥混合施用。並在開花前、幼果期、果實膨大期各噴施壯果蒂靈一次，使瓜蒂增粗，強化營養定向輸送量，促進瓜體快速發育，瓜型漂亮，香甜味美；生長周期不落花、不落瓜、無裂瓜、無畸形瓜。</p><p>&nbsp;</p><p><strong>3、基肥：</strong></p><p>基肥以有機肥為主，配合適量化肥。一般畝施農家肥3000-3500千克或商品有機肥400-450千克，尿素5-6千克、磷酸二銨13-17千克、硫酸鉀5-6千克。</p><p>&nbsp;</p><p><strong>4、追肥：</strong></p><p>伸蔓期追肥：畝施尿素9-10千克、硫酸鉀3-4千克。果實膨大初期：畝施尿素12-14千克、硫酸鉀4-6千克。果實膨大中期追肥：畝施尿素9-10千克、硫酸鉀3-4千克。根外追肥：坐果後每隔7天左右噴一次0.3%磷酸二氫鉀溶液，連噴2~3次。</p><p>&nbsp;</p><p>以上就是甜瓜施肥的技術了，大家有沒有學會呢？<br>&nbsp;</p><p>&nbsp;</p>', '2019-11-25 14:11:44', 1, 'http://localhost:6003/images/forum/1/678440232be43e10f9bcb94f02ba5a40.jpg', 0),
(30, '【小農故事】你不知道的農法知識       ', '4', '閒聊', 0, 0, '<p>走訪鄉間，空氣中充滿著泥土的芬芳，赤腳踩在柔軟的土壤上，讓人有種回到母親懷抱的溫暖。</p><p>&nbsp;</p><p>訪談這幾位年輕的農夫，雖然每個人的農法有些微的不同，但是大家都帶著一種「友善對待土地」的態度，而非以追求產量為目標，更不願意使用化學肥料，造成土壤硬化、微生物死亡，甚至傷害生態。他們不但希望作物可以安心的吃，更希望土地也能安心的走，因此這些農地是如此純淨而自然。</p><p>&nbsp;</p><p>在瞭解每個農夫的故事之前，就讓我們一起先來了解一下各種農法的概念吧！</p><p>&nbsp;</p><p><strong>慣行農法</strong></p><p>慣行農法也稱為「石油農法」，因為這是利用石油提煉各種農藥、化學肥料的一種栽培方式，其實在人類整個歷史來說是相當短暫的，自石油化工業盛行才開始興起。台灣大約自1950年代以來，開始改變自古以來的耕作方式，慢慢使用慣性農法，到了1970年代開始推廣綠色革命，更是大量依賴農藥、化學肥料，甚至除草劑等，並且以農業技術開發大幅度促使糧食產量提升。</p><p>這段期間，政府也積極推廣化肥的使用，所以目前絕大多數的台灣農民都是實施「慣行農法」，依據農委會的統計，2010年台灣就用掉3萬5千公噸的農藥。</p><p>&nbsp;</p><p><strong>無毒農法</strong></p><p>無毒農法有許多派別，做法上也有不同的差異，有的標榜可以使用農藥及部分化學肥料，但使用必須按照標示來使用，而且農作物的採收時間要在安全採收期過後才能採收。另外，也有標榜農地和用水，以及使用的資材均不含化學毒性，才能稱做無毒農法。</p><p>總之，無毒農法的最大特色，就是使用了科學有機的生產方式，例如:近年來有些農作物利用微生物與天然素材去栽培植物，並且維持土壤的活力。所以比起有機農業，無毒農業有比較多的彈性，讓剛入門的生產者能夠踏入農業生產的門檻。</p><p>&nbsp;</p><p><strong>有機農法</strong></p><p>在1920年代歐洲各地開始關心農業及農村的發展，開始實施有機農業。但是直至1970年代出現能源危機，農地因過度使用農藥、化肥而產生貧脊現象，有機農業才受到各國政府所重視。到了1980年，世界各國已經有許多生產者與消費者團體開始正視這個生產制度，於是，1990年代各國政府開始立法制定認証的標準。</p><p>&nbsp;</p><p><strong>自然農法</strong></p><p>所謂自然農法，就是不施用農藥及肥料的農作法。但是自然農法與有機農法並不完全相同，最主要的差別在於對土壤的利用及施肥上。有機農法對於農作物仍會施用有機肥做為基肥；自然農法則是利用蚯蚓、微生物……等天然基肥來滋養土壤。</p><p>現在蔚為時尚的自然農法，其實並不是新的耕種方式，只是回到沒有農藥及化肥發明以前的農作方法。這是由福岡正信於1936年建立的農作模式，在日本稱為「無肥料栽培」。目前常見的自然農法主要為日本的「秀明自然農法」以及韓國的「趙氏自然農法」，但不論是哪一派別，自然農法最主要的精神就是以最友善環境的方式來種植作物。</p><p>&nbsp;</p><p>由於目前過度開發農地的方式，讓土壤無法休養生息，反而讓自然生態受到迫害。所以，自然農法比有機農法更為嚴格，除了有機農法的規定之外，還要維護自然生態，希望使土壤潔淨，強化土壤本身力量，也讓飽受汙染的土地回復為原貌。</p><p>&nbsp;</p><p>自然農法鼓勵農作物與牲畜的綜合農場，可利用農產做為動物的飼料，而牲畜的副產品，如做為作物的天然肥料，藉此也讓人體會大自然生生不息的道理中。</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>科技在進步，人們利用農藥與化學肥料等人工化學品，增加農作物的生產量，長期累積下來，卻造成土壤相當程度的損害。一塊土地經過慣行農法之後，幾年之間就變得無法供給養份，而生產者也必須休耕讓土地休息。因此，以維持土壤的健康狀態與生態環境，讓土地可以持續利用為準則的農法漸漸興起，並且已經是全球的風潮。</p>', '2019-11-25 14:18:03', 1, 'http://localhost:6003/images/forum/1/f891ef7a010480f95256711e46a00c01.jpg', 0),
(32, '【分享】劉山東牛肉麵 ♥ 邰智源大力推薦', '2', '魅力北部', 3, 3, '<p>以前高中在台北車站補習時，最期待的就是課餘返家前利用僅剩的時光到處亂逛，</p><p>多年後考研究所又再度回到這附近補習，重拾課後閒晃的樂趣。</p><p>幾年下來，走遍台北車站附近不少商家，</p><p>但竟然都沒發現這附近的巷弄內藏了一家廣受好評的牛肉麵。</p><p>&nbsp;</p><p>劉山東牛肉麵創立於民國40年，算一算已有60多年歷史了，</p><p>邰智源寫的《邰客好吃》一書中，對這可說是以「激推」來形容。</p><p>到此捧場的客人相當多，尖峰時段得排隊才能入座。</p><p>&nbsp;</p><p>來的時間有點晚了，熱門的小菜早已賣光，</p><p>只剩下牛肉麵常見的蒜頭與酸菜當我們的配菜了。</p><p>&nbsp;</p><p>清燉牛肉麵（130元）</p><p>金黃的湯頭喝起來溫順甘甜，最深得我心的是肉片，薄嫩鮮甜好吃得不得了。</p><p>粗麵條用的是筷子麵，口感紮實有勁道，相較於細麵更為熱門，我們點完後就沒啦。</p><p>&nbsp;</p><p>紅燒牛肉湯（120元）</p><p>紅燒口味的牛肉吃起來和前者相比，</p><p>稍微澀口一點，咬到最後會有些肉屑塞在牙縫中。</p><p>&nbsp;</p><p>兩種風味各有忠實擁戴者，我們投清燉一票，分享給大家～</p>', '2019-11-25 14:41:10', 1, 'http://localhost:6003/images/forum/1/45a664d2c36e72f6635bd7d21dcd737d.jpg', 12),
(33, '【分享】尾張雞三和：日本百年親子丼激讚人氣店 ', '2', '魅力北部', 2, 2, '<p>雞三和是名古屋親子丼名店，創業超過120年，在日本擁有70多間分店，名氣非常響亮。</p><p>&nbsp;</p><p>到訪的是台北車站二樓分店，<strong>假日生意頗好，得稍等了一會兒</strong>才有位置。<br>櫃台店員超級親切，在點餐過程中詳盡介紹，並告訴我們絕對和在日本當地品嘗的滋味不相上下，<br>從日本帶來的秘傳醬汁一定讓我們滿意，姑且不論餐點口味，光是他的熱誠就讓我覺得有點置身日本了。</p><p>&nbsp;</p><p><strong>雞三和菜單</strong>中，熱銷<strong>第一名是親子丼</strong>，其次是炙烤親子丼，點餐會送雞肉丸子 or 紀州南高梅蜂蜜梅乾。<br>內用有服務費10%，外帶則不用，附近上班族如果喜歡，記得把握這個小優惠喔。<br>另外波比更推薦大家辦張<strong>微風信用卡，免年費當日直接9折</strong>，微風信義店平日還無須消費即享免費停車，有夠讚。</p><p>&nbsp;</p><p><strong>親子丼（270元）</strong><br>坐下來不到兩分鐘餐點就上桌了，超級神速。碗雖大但不深，不過正常食量的女孩子吃完是會飽的。</p><p>&nbsp;</p><p><strong>半熟蛋輕搖會不停晃動</strong>，吃來超級嫩口。醬汁甘甜，鹹度、量都掌握的剛好，不會湯湯水水，恰好包覆所有米粒。<br>主角之一的雞肉也表現得無話可說，嫩口且份量充足，<strong>整體來說好吃啊！</strong>至於附贈的雞肉丸子就普通了，不提也罷。</p><p>&nbsp;</p><p><strong>炙烤親子丼（290元）</strong><br>烤過的雞肉，比上面那道親子丼多了20元，可是滋味卻沒比較優秀。<br>不知其原因，但很明顯可以看出雞蛋明顯熟了些，右半邊的蛋液已經沒什麼光澤了，接近固定成形。</p><p>&nbsp;</p><p>雖說如此雞蛋還是嫩啦，只是整體沒有親子丼的來得厲害。因為烤過，香氣自然比前面的高出一截，<br>搭上附贈的酸甜開胃梅子，還行囉。最後還有濃郁的丸子高湯可飲用。<br>下次再訪認為想單純的親子丼更適合我，分享給來到微風台北車站二樓不知道要吃什麼的大家囉～</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>尾張雞三和親子丼</strong>，日本名古屋百年激讚人氣名店，現在台北也吃的到喔～尾張雞三和分店目前有兩家，<br>雞三和微風信義、雞三和微風台北車站。<strong>菜單中最熱賣</strong>的是<strong>親子丼、炙烤親子丼</strong>兩款，其中波比尤其愛親子丼，<br>無敵滑嫩半熟蛋，搭配甘甜醬汁，好好吃啊。來雞三和外帶免10%服務費，很適合附近上班族，一併分享給大家。<br><br>店名：雞三和 (微風台北車站店)<br>地址：台北市中正區北平西路3號 (捷運台北車站，步行1分鐘，<a href=\"https://www.google.com.tw/maps/place/%E9%9B%9E%E4%B8%89%E5%92%8C+%E5%BE%AE%E9%A2%A8%E5%8F%B0%E5%8C%97%E8%BB%8A%E7%AB%99%E5%BA%97/@25.047839,121.517094,15z/data=!4m2!3m1!1s0x0:0xfdf73632387d8ca2?ved=2ahUKEwjK6LubjPveAhWCzbwKHRjeAFUQ_BIwCnoECAAQCA\">google map</a>)<br>電話：(02)&nbsp;2388-8638<br>營業時間：10:00-22:00 (周一至周日)<br>品嘗日期：2018.11</p>', '2019-11-25 14:47:16', 1, 'http://localhost:6003/images/forum/1/0bce21cff9919e71023d7b4333afb1b4.jpg', 4),
(34, '【分享】雙月食品社：米其林推薦排隊店', '2', '魅力北部', 1, 1, '<p>打電話得知雙月食品社不能訂位時，心裡有些擔心，很怕好友久等不耐。<br>好在比我想像中的還快，平日中午十二點半現場排隊，莫約等了十五分鐘便順利入座了。</p><p>&nbsp;</p><p>雙月食品社<strong>被推薦過的菜色非常多</strong>，<strong>雙月油飯</strong>、<strong>蛤蜊燉雞湯</strong>、<strong>何首烏燉雞</strong>、<strong>東石鮮蚵系列餐點</strong>，<strong>檸檬愛玉</strong>。<br>另外小菜中的百頁豆腐、甜不辣、豆皮、花干、米血糕、嘴邊肉等，也有不少人喜歡，同時也是店家的大推薦。<br>波比這次從當中點了好幾樣，覺得口味真的很棒，然後價格又很親民，總之是自己會常想來的優質店家。</p><p>&nbsp;</p><p>唯一的缺點大概就是店內用餐空間狹小，眾人密密麻麻擠在一起，要是能再寬敞些就更棒了。<br>寫到這裡突然看到服務員的身影，順帶一提他們的服務態度值得嘉許，排隊過程中還會遞上牛蒡茶真貼心。</p><p>&nbsp;</p><p><strong>百頁豆腐（20元）</strong><br>波比平常不太吃這類食物，因為嚴格來說它不是豆腐，而是加工食品。<br>難得一次就獻給雙月食品社了，因為同行的友人想吃，品嘗後覺得真是不錯，口感紮實Q彈很涮嘴。</p><p>&nbsp;</p><p><strong>雙月油飯（35元）</strong><br>其貌不揚的油飯滋味卻相當的棒，配料不多但香氣大勝比市售的油飯，<br>米粒的Q度和水份都掌握得很好，帶點些微的麻油香氣，據說常常賣完，想吃的人要趁早喔。</p><p>&nbsp;</p><p><strong>油蔥麵線（35元）</strong><br>油蔥味淡淡的，走清淡路線，湯汁給得多，不會吃到最後面臨麵線拌不開的窘境。<br>波比覺得這道還好，可是友人卻吃得津津有味XD，美食就是這樣總是因人而異啊。</p><p>&nbsp;</p><p><strong>鮮蚵乾麵（100元）</strong><br>波比讚不絕口的一道料理，暴肥胖鮮蚵太邪惡了啦！</p><p>每日宅配的東石鮮蚵，新鮮現剝不泡水，蚵仔的熟度拿捏得恰到好處，<br>最怕吃到過老縮水，或者太生過腥的口感，這裡完全沒有，欲罷不能的送進口中。<br>整碗乾麵份量不算多，滋味偏甜，但滿滿的鮮蚵已經讓波比很滿足了，可惜友人比較喜歡鹹。</p><p>&nbsp;</p><p><strong>蛤蜊燉雞湯（150元）</strong><br>總算出現一道波比和好友都一致讚賞的料理了，相較於其他餐點價格雖然偏高，但真材實料料超滿。<br>蛤蜊份量多，不過塊頭不算大，雖是如此但卻是功不可沒的角色，湯頭層次的主要來源之一。</p><p>&nbsp;</p><p>溫體仿土雞紮紮實實的三大塊，雞肉和蛤蜊熬煮得湯頭本來就很美味了，<br>加上青菜的清甜，整碗湯好喝得不得了，下次來一定會再點的湯品，期待下次再訪雙月食品社的那天。</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>台北雙月食品社</strong>是2018年<strong>米其林必比登推薦</strong>名單之一，不提供訂位，離捷運善導寺站五分鐘內，臺大醫院十分鐘。<br>雙月食品社菜單中最<strong>熱門的餐點有</strong>油飯、蛤蜊燉雞湯、何首烏燉雞、東石暴肥鮮蚵系列餐點，檸檬愛玉。<br>另外小菜中的百頁豆腐、甜不辣、豆皮、米血糕也很強，傳聞中張忠謀也很愛的店家，波比覺得真的超讚，必訪！<br><br>店名：雙月食品社<br>地址：台北市中正區青島東路6-2號 (捷運善導寺站步行4分鐘，<a href=\"https://www.google.com.tw/maps/place/%E9%9B%99%E6%9C%88%E9%A3%9F%E5%93%81%E7%A4%BE/@25.043717,121.5220358,15z/data=!4m5!3m4!1s0x0:0x54758a6d3b593eef!8m2!3d25.043717!4d121.5220358\">google map</a>)<br>電話：(02)&nbsp;3393-8953<br>營業時間：11:00-14:00；17:00-20:00 (周日公休)<br>官網：<a href=\"https://www.facebook.com/ShuangYueFood\">https://www.facebook.com/ShuangYueFood</a><br>品嘗日期：2018/5</p>', '2019-11-25 14:50:59', 1, 'http://localhost:6003/images/forum/1/f9a28dd316152e26158bd673c6dbd7e4.jpg', 5),
(35, '以馬內利鮮魚湯 ♥ 整隻鮮魚每日現煮', '2', '魅力北部', 0, 0, '<p>又變冷了，每次寒流來襲我就特別想喝熱湯，尤其是這種整隻現煮的鮮魚湯。<br>可惜這湯不好找，尤其在街頭攤販更是難尋，因為賣貴沒人買，便宜又賺不多，<br>其次水煮吃的是原味，沒辦法用醬汁蓋掉，一旦不新鮮原形畢露。</p><p>&nbsp;</p><p>以馬內利生意非常的好，來的人十之八九會點隻鍋裡沸煮的吳郭魚，<br>原因很簡單，就是上面的缺點它都沒有，便宜、新鮮又美味，CP值相當的高。<br>&nbsp;</p><p><strong>炒麵（小，30元）</strong><br>炒麵味道蠻普通的，就是豆芽加肉燥，但加上內行人才知道的蒜汁和黑醋滋味三級跳，<br>蒜香、醋香加肉醬的鹹香，口感豐富又涮嘴。<br>&nbsp;</p><p><strong>炒米粉（小，30元）</strong><br>米粉略粗，帶有嚼勁，Q度很夠，加上特調醬汁後一樣好讚。<br>用餐時發現，可以直接和老闆點隱藏版菜色「小混」（小份炒麵加炒米粉），<br>一次雙享受，下次來我也要這麼做。</p><p>&nbsp;</p><p><strong>鮮魚湯（60元）</strong><br>人氣王上桌啦，整條吳郭魚光看就好過癮～<br>魚肉鮮嫩甘美，一點點土味都沒有，老闆娘自豪的說，每日限量賣完就沒啦。<br>冷颼颼的天氣，來上一碗充滿薑絲和九層塔的鮮甜魚湯，食後整個人都暖和了起來。</p><p>&nbsp;</p><p>---</p><p>&nbsp;</p><p>店名：以馬內利鮮魚湯<br>&nbsp;</p><p>品嘗日期：2016/1</p><p>地址：台北市中正區杭州南路一段11巷3號（捷運善導寺站）<br>電話：(02) 2351-5378、0952-427-709<br>營業時間：07:00-19:00（周一至周五）；07:00-14:00（周六）；周日和國定假日休</p>', '2019-11-25 14:59:16', 1, 'http://localhost:6003/images/forum/1/4cefa266047d17c91fb0bd27c41cdb85.jpg', 2),
(36, '延三夜市嘉義雄雞肉飯 ♥ 40年老味道店內坐無虛席', '2', '魅力北部', 0, 0, '<p>吃完了兩家牛肉料理後，已經晚上九點半了，有點疲憊的我本打算打道回府，<br>可威哥一直被這家生意好到不行的雞肉飯店吸引著，嚷嚷著他還沒吃飽，<br>看他一副沒吃到晚上會睡不好的樣子，只好進來啦～</p><p>&nbsp;</p><p>雖是老店裝潢卻新穎，乾淨整潔的用餐環境在夜市裡格外顯得珍貴。<br>&nbsp;</p><p><strong>雞肉飯（35元）</strong><br>我喜歡雞油給很多的雞肉飯，因為這樣吃起來香氣才足，這家剛好符合我的需求，<br>挖一匙白飯起來後，可以看到底層還有很多湯汁，吃完後嘴巴油亮亮的，過癮阿。<br>不過它的雞肉絲不合我胃口，剛入口時有種我說不上來奇妙的味道。</p><p>&nbsp;</p><p><strong>現炒青菜（小，40元）</strong><br>這類的小吃店多半都是燙青菜，有賣現炒青菜太好了，<br>稍微有點油，但好在不會重鹹蠻清淡的，大火快炒後相當清脆。</p><p>&nbsp;</p><p>---</p><p>&nbsp;</p><p>店名：嘉義雄雞肉飯<br>&nbsp;</p><p>品嘗日期：2015/5<br>電話：(02)&nbsp;2594-8078</p><p>地址：台北市大同區延平北路3段61號（捷運大橋頭站）<br>&nbsp;</p><p>營業時間：16:00-22:00<br><br>&nbsp;</p>', '2019-11-25 15:02:22', 1, 'http://localhost:6003/images/forum/1/526b587111df7217e7fc3dcc203457bf.jpg', 0),
(37, '延三夜市汕頭牛肉麵 ♥ 小吃教主舒國治推薦', '2', '魅力北部', 0, 0, '<p>平常我們很少有時間上餐館，用餐時間多半都以小吃店為主。<br>舒國治是我某位愛吃同事推薦我閱讀的作家，<br>因為他恰巧也很愛分享小吃，甚至被喻為<a href=\"http://www.gvm.com.tw/Boardcontent_20700.html\">小吃教主</a>。<br>今天要分享的這間店，就是舒國治的愛店之一。</p><p>&nbsp;</p><p>商品種類不多，其中有兩項的價格最讓我吃驚，<br>一個是通常都要30元以上的青菜，它只賣20元，<br>另個是清燉牛肉麵居然只要70元，兩者價位都非常佛心。</p><p>&nbsp;</p><p><br><strong>清燉牛肉麵（小，70元）</strong><br>會這麼便宜不是沒有道理，它的尺寸還蠻迷你，<br>建議男生一定要點大碗，不然鐵定會覺得吃不飽，哈哈。<br><br>我很喜歡這湯頭，喝起來舒服不厚重，餘味會慢慢回甘，帶有鮮明的中藥香。<br>牛肉也蠻小片的，用的是腱子肉，有咬勁但不乾澀。</p><p>&nbsp;</p><p>細扁麵條上桌時稍微黏在一起，好在快速和著湯攪拌開來就好了，<br>以前我都愛厚實一點的麵，但後來發現細麵更容易吸附湯汁的香氣，吃來更為入味。<br>只是這類的麵要吃快一點，如果邊吃邊聊很容易就過軟了。<br><br>雖然份量不大，但對比價格和口味，我覺得這牛肉麵CP值很高，<br>是那種會讓我三不五時想跑去回味一下的美味小吃</p><p><br>---</p><p>&nbsp;</p><p>店名：延三夜市汕頭牛肉麵<br>&nbsp;</p><p>品嘗日期：2015/5</p><p>地址：台北市延平北路三段60號騎樓下（鄰近捷運大橋頭站）<br>&nbsp;</p><p>營業時間：17:00-售完為止（約11點前），六日與例假日公休<br>&nbsp;</p>', '2019-11-25 15:10:03', 1, 'http://localhost:6003/images/forum/1/0811c17ef30cd0de8c4031e1f6ba9d12.jpg', 0),
(50, '【分享】梅漬番茄', '1', '時令美味', 0, 0, '<p>每次到了小番茄盛產的季節，就表示炎熱的夏天即將來囉！新手小廚娘因為經驗不足，難免會買到酸吱吱的番茄，\r\n\r\n這時候拿來做成冰釀梅漬番茄或是蜜餞番茄就能把番茄銷光光啦！這次黑洞食堂就端出開胃小點冰釀梅漬番茄吧～</p><p>材料</p><p>番茄 200 g</p><p>話梅 4 粒</p><p>調味料&nbsp;</p><p>冰糖 25 g</p><p>檸檬汁 5 g</p><p>芡汁</p><p>水 110 g</p><p>&nbsp;</p><p><strong>第1步</strong></p><p>番茄洗淨，用刀在番茄底部劃十字，放入滾水煮至外皮翻起。</p><p>&nbsp;</p><p><strong>第2步</strong></p><p>撈起後置入冰水中較易剝皮。</p><p>&nbsp;</p><p><strong>第3步</strong></p><p>將冰糖，話梅倒入水中煮滾，放涼。</p><p>&nbsp;</p><p><strong>第4步</strong></p><p>加入新鮮檸檬汁調勻。</p><p>&nbsp;</p><p><strong>第5步</strong></p><p>將做好的話梅水倒入番茄中，放入冰箱冷藏一晚即可。</p>', '2019-12-02 09:53:32', 23, 'http://localhost:6003/images/forum/23/9a3824ddfe40b7798f392563ac0bec0f.jpg', 1),
(51, '【分享】紅菜頭玉桂紅莓卷', '1', '派對同樂', 1, 1, '<p>紅菜頭有雙重抗氧化保護作用，有助身體更易吸收另一種脂溶性抗氧化物維生素。它的天然色素更是美不可擋，加入玉桂卷內，吸睛又健康！ *(份量可做2寸大的24個)*</p><p><strong>第1步</strong></p><p>先調校溫水至大約28度在碗入，加入酵母攪勻後，等大約1分鐘，如碗內浮現酵母群如圖，即表示酵母活躍</p><p>&nbsp;</p><p><strong>第2步</strong></p><p>2A ) 除了鹽及酵母水外，把所有材料放入不銹鋼大碗內 2B ) 酵母水倒入量杯內，加入室溫水至150毫升 註: 水1克=1毫升 2C ) 除鹽外把所有材料搓揉成團狀，見水份被吸收後，加入鹽一起搓揉至麵團光滑 2D)滾圓麵團，在大碗旁及麵團表面塗上薄薄的油，以防蓋上保鮮紙後粘著 3B) 焗爐預熱170度1分鐘，然後關上焗爐電掣，放整盤麵團入爐發酵1小時 (如夏天溫度至27度或以上，便可在室溫發酵，用毛巾蓋著即可發酵)</p><p>&nbsp;</p><p><strong>第3步</strong></p><p>3A) 焗爐預熱170度1分鐘，然後關上焗爐電掣，放整盤麵團入爐發酵1小時 3B) 發酵1小時後會膨脹至2倍大如圖</p><p>&nbsp;</p><p><strong>第4步</strong></p><p>把整份麵團按平排氣，在檯上麵粉棍及洒上麵粉，用麵粉棍擀平整塊麵團</p><p>&nbsp;</p><p><strong>第5步</strong></p><p>把餡料用砂糖及玉桂粉放在碗內混和</p><p>&nbsp;</p><p><strong>第6步</strong></p><p>平均地洒上玉桂砂糖</p><p>&nbsp;</p><p><strong>第7步</strong></p><p>把紅莓乾平均地放在麵塊上</p><p>&nbsp;</p><p><strong>第8步</strong></p><p>從自己的方向向外卷</p><p>&nbsp;</p><p><strong>第9步</strong></p><p>用刀切開麵條約2厘米厚，可按個人喜好加減厚度</p><p>&nbsp;</p><p><strong>第10步</strong></p><p>10A) 焗盤上放牛油紙，每個卷分開約2厘米，重覆步驟3發酵40分鐘至2倍大 ((如夏天溫度至27度或以上，便可在室溫發酵，用毛巾蓋著即可發酵) 10B) 焗爐預熱200度焗10分鐘即可</p>', '2019-12-02 09:57:17', 23, 'http://localhost:6003/images/forum/23/b3a2a4eb978ff3db970f96359523d3bb.jpg', 1),
(52, '【分享】薑黃鮮奶', '1', '時令美味', 0, 0, '<p>根據Google Food Trends 2016，薑黃成為最多人搜尋的食物之一，為甚麼愈來愈人對薑黃感興趣？薑黃容易與薑混淆，其實薑黃不是薑，薑黃質地較脆及軟身，味道亦較溫和，切開後呈橙黃色，源於當中含有豐富的薑黃素。薑黃素有抗炎、抗菌、抗氧化等功效，而中醫則認為有活血行氣、通經止痛。薑黃素是脂溶性的，因此將薑黃與全脂牛奶混和一起吃，吸收和食療效果便會大大提升。</p><p>&nbsp;</p><p><strong>第1步</strong></p><p>將所有材料一同放入鍋中以小火慢煮</p><p><strong>第2步</strong></p><p>煮時需不時攪拌</p><p><strong>第3步</strong></p><p>煮至牛奶開始冒氣泡時關火</p><p><strong>第4步</strong></p><p>隔渣後稍為攤涼即可</p><p><strong>第5步</strong></p><p>加入蜂蜜拌勻飲用</p>', '2019-12-02 09:59:11', 23, 'http://localhost:6003/images/forum/23/697050080274c23676a0296df0ffb33d.jpg', 0),
(53, '【分享】高抗氧化可可奶', '1', '入冬滋補', 0, 0, '<p>生可可粉是抗氧化食物之冠，有效對抗衰老。而利用椰棗代替砂糖調味，較天然之餘更可增加纖維攝取。</p><p><strong>第1步</strong></p><p>牛油果去核起肉備用。</p><p>&nbsp;</p><p><strong>第2步</strong></p><p>椰棗去核備用。</p><p>&nbsp;</p><p><strong>第3步</strong></p><p>將所有材料放入攪拌機打勻，即可享用。</p><p>&nbsp;</p><p>&nbsp;</p>', '2019-12-02 10:05:26', 23, 'http://localhost:6003/images/forum/23/04fb19822d86789f246d4ea2f023f4f4.png', 0),
(54, '【分享】黑糖蝴蝶酥', '1', '派對同樂', 0, 0, '<p>用冷凍酥皮做出好吃的小點心，很可愛的愛心圖形，撒上一些黑糖，微甜又充滿奶油香，是孩子們很喜歡的點心，做法也很簡單，找時間一起動手做吧！</p><p>&nbsp;</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%86%B7%E5%87%8D%E9%85%A5%E7%9A%AE&amp;utm_medium=ingredient&amp;utm_source=recipe\">冷凍酥皮　</a>2片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%85%A8%E8%9B%8B%E6%B6%B2&amp;utm_medium=ingredient&amp;utm_source=recipe\">全蛋液　</a>少許</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%BB%91%E7%B3%96&amp;utm_medium=ingredient&amp;utm_source=recipe\">黑糖　</a>適量</p><p>&nbsp;</p><p><strong>1</strong>將冷凍酥皮解凍，刷上一層薄薄的蛋液。</p><p>&nbsp;</p><p><strong>2</strong>再灑上一層薄薄的黑糖，將酥皮分兩邊對折再對折，中間記得留一個小縫隙，方便最後對折時不會太緊而扭曲變形。</p><p>&nbsp;</p><p><strong>3</strong>對折好的酥皮放置冷凍庫，大約冷凍30分鐘，取出後切片，每片寬度約0.5cm。</p><p>&nbsp;</p><p><strong>4</strong>烤箱預熱，以180度烤10分鐘即可出爐囉～</p><p>小撇步</p><p>1.將酥皮放置烤盤時，記得要留大一點的間隔，因為酥皮會膨脹，茉莉圖片中的餅乾膨脹後，每個剛剛好成為好鄰居。<br>2.烤好可再用吸油紙吸一下油份，畢竟酥皮裡的含油量不少喲～</p>', '2019-12-02 10:09:52', 23, 'http://localhost:6003/images/forum/23/40e4f2def8d1b5f2eb178f12e504e19c.jpg', 1),
(55, '【分享】草莓蛋糕捲', '1', '派對同樂', 0, 0, '<p>韓國最新超級受歡迎的草莓蛋糕，最近網站雜誌大大流行啊，聽說當地要買，還得排隊2小時才吃得到，看了自己好想咬一口，嘗嘗酸酸甜甜的滋味！<br>材料很簡單，外皮其實可以使用海綿蛋糕做法，內餡就更簡單了，鮮奶油加煉乳是肉桂最喜歡的口味，放置冰箱稍稍冷藏，冰冰甜甜好好吃，加上新鮮草莓我覺得真的超級無敵了！快來動手做給心愛的人吃，韓國名店Le Bread Lab有名排隊點心，看完肯定妳也會喔！</p><p>&nbsp;</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E4%BD%8E%E7%AD%8B%E9%BA%B5%E7%B2%89&amp;utm_medium=ingredient&amp;utm_source=recipe\">低筋麵粉</a></p><p>50g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%9B%9E%E8%9B%8B&amp;utm_medium=ingredient&amp;utm_source=recipe\">雞蛋</a></p><p>2個</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B4%B0%E7%A0%82%E7%B3%96&amp;utm_medium=ingredient&amp;utm_source=recipe\">細砂糖</a></p><p>50g</p><p>內餡</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%AE%AE%E5%A5%B6%E6%B2%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">鮮奶油</a></p><p>200ml</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%85%89%E4%B9%B3&amp;utm_medium=ingredient&amp;utm_source=recipe\">煉乳</a></p><p>30g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%8D%89%E8%8E%93&amp;utm_medium=ingredient&amp;utm_source=recipe\">草莓</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B3%96%E7%B2%89&amp;utm_medium=ingredient&amp;utm_source=recipe\">糖粉</a></p><p>適量</p><p>&nbsp;</p><p><strong>1</strong></p><p>湯鍋加一點水煮開到沸騰離火。</p><p>&nbsp;</p><p><strong>2</strong></p><p>攪拌盆加入雞蛋與砂糖放到湯鍋上。</p><p>&nbsp;</p><p><strong>3</strong></p><p>用電動打蛋器攪打到蓬鬆顏色變淡呈現霜狀，舉起蛋糊會慢慢滑落為止。</p><p>&nbsp;</p><p><strong>4</strong></p><p>麵粉過篩分二次加入，用刮刀由下往上輕輕攪拌，別拌太久避免消泡。</p><p>&nbsp;</p><p><strong>5</strong></p><p>烤盤鋪烘焙紙，麵糊裝進擠花袋，中心往外擠出圓形。</p><p>&nbsp;</p><p><strong>6</strong></p><p>直徑10cm圓形大約可以擠到7個。</p><p>&nbsp;</p><p><strong>7</strong></p><p>烤箱先以170℃預熱，放進去後時間調整為10分鐘，完成後放置5分鐘稍冷。</p><p>&nbsp;</p><p><strong>8</strong></p><p>烘焙紙剪出比蛋糕大一點面積，趁蛋糕還有一點微溫放進輕輕凹折備用。</p><p>&nbsp;</p><p><strong>9</strong></p><p>鮮奶油加入煉乳攪打成奶油霜放入擠花袋。</p><p>&nbsp;</p><p><strong>10</strong></p><p>依圖示擠入奶油霜與放進切片草莓就完成了。</p><p>&nbsp;</p><p><strong>11</strong></p><p>表面再撒些糖粉更好看唷!!</p>', '2019-12-02 10:22:17', 23, 'http://localhost:6003/images/forum/23/573f32224bb96b2dcb78c5181d26d061.jpg', 0),
(58, '【分享】巧克力杯子蛋糕', '1', '派對同樂', 0, 0, '<p>家中小小孩一看見媽咪烤箱啟動~都會問起~是做杯子蛋糕嗎??這次是做杯子蛋糕沒錯!!濃濃巧克力香的杯子蛋糕~我喜歡放置一夜之後巧克力香會更濃~口感會更濕潤綿密!!但小小孩早已忍不住開始吃起來了</p><p>&nbsp;</p><p>食材</p><p>可可蛋黃糊</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%85%A8%E8%9B%8B&amp;utm_medium=ingredient&amp;utm_source=recipe\">全蛋</a></p><p>一顆</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%9B%8B%E9%BB%83&amp;utm_medium=ingredient&amp;utm_source=recipe\">蛋黃</a></p><p>3顆</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%A0%82%E7%B3%96&amp;utm_medium=ingredient&amp;utm_source=recipe\">砂糖</a></p><p>10克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%8E%84%E7%B1%B3%E6%B2%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">玄米油</a></p><p>45克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%AE%AE%E5%A5%B6&amp;utm_medium=ingredient&amp;utm_source=recipe\">鮮奶</a></p><p>65克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E4%BD%8E%E7%AD%8B%E9%BA%B5%E7%B2%89&amp;utm_medium=ingredient&amp;utm_source=recipe\">低筋麵粉</a></p><p>65克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%84%A1%E7%B3%96%E5%8F%AF%E5%8F%AF%E7%B2%89&amp;utm_medium=ingredient&amp;utm_source=recipe\">無糖可可粉</a></p><p>20克</p><p>蛋白霜</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%9B%8B%E7%99%BD&amp;utm_medium=ingredient&amp;utm_source=recipe\">蛋白</a></p><p>3顆</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%AA%B8%E6%AA%AC%E6%B1%81%E6%88%96%E7%99%BD%E9%86%8B&amp;utm_medium=ingredient&amp;utm_source=recipe\">檸檬汁或白醋</a></p><p>少許</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B4%B0%E7%A0%82%E7%B3%96&amp;utm_medium=ingredient&amp;utm_source=recipe\">細砂糖</a></p><p>45克</p><p>&nbsp;</p><p><strong>1</strong></p><p>蛋黃糊製作 一顆全蛋與三顆蛋黃先與10克砂糖拌勻備用</p><p>&nbsp;</p><p><strong>2</strong></p><p>將油與鮮奶入鍋中~加熱至60-65度~離火</p><p>&nbsp;</p><p><strong>3</strong></p><p>加入低筋麵粉與可可粉</p><p>&nbsp;</p><p><strong>4</strong></p><p>拌勻~會呈柔軟帶點彈性團狀~不是硬硬的!</p><p>&nbsp;</p><p><strong>5</strong></p><p>分4次加入拌勻的步驟一~每加一次拌勻~再加入下一次~直到蛋加完</p><p>&nbsp;</p><p><strong>6</strong></p><p>狀態是非常絲滑的!可可蛋黃糊完成</p><p>&nbsp;</p><p><strong>7</strong></p><p>蛋白霜製作:蛋白加檸檬汁或白醋~砂糖分三次~高~中~低速~打至直立且蛋白霜非常光澤有亮度</p><p>&nbsp;</p><p><strong>8</strong></p><p>先拿1/3打發的蛋白拌入蛋黃糊中~仔細拌勻</p><p>&nbsp;</p><p><strong>9</strong></p><p>之後再將拌勻的麵糊倒回蛋白霜中</p><p>&nbsp;</p><p><strong>10</strong></p><p>拌勻~拌好麵糊呈現狀態~濃稠的非水水的!使用馬芬紙杯模~麵糊倒九分滿~可以製做10個杯子蛋糕～入模後震一下讓大氣泡消掉～入爐</p><p>&nbsp;</p><p><strong>11</strong></p><p>爐中放一杯水增加烤箱濕度~不是水浴！110度15分鐘(表面凝結)~120度10分鐘~130度10分鐘~150度10分鐘~160度10分鐘*(烤溫依各家烤箱狀況不同~僅為參考!依自己烤箱烤溫為主要!我的烤箱是無上下火德國B牌家庭烤箱)</p><p>&nbsp;</p><p><strong>12</strong></p><p>杯子蛋糕要烤的表面飽滿不裂開不縮腰~必須要漸進式爐溫~若蛋糕一下在爐中長太快~出爐就會縮得厲害!!所以別心急求快!爐溫與時間依每家狀態不同~就我自己也會依食譜本身含的水量去斟酌調一下當下的爐溫與時間~完全以狀態去判斷!!無法一直依照一個固定不變的爐溫與時間去操作</p><p>&nbsp;</p><p><strong>13</strong></p><p>幫蛋糕做上造型，又更加可愛，小熊耳朵》mini Oreo ，鼻子》白色鈕扣型巧克力，背面用融化巧克力助沾黏，再用巧克力畫上鼻嘴</p>', '2019-12-02 10:28:02', 15, 'http://localhost:6003/images/forum/15/72d5a044093c8bbd1d34eb525d90fcc3.jpg', 0),
(59, '【分享】枸杞桂圓甜粥(悶燒罐)', '1', '入冬滋補', 0, 0, '<p>有一種甜粥，那滿滿的桂圓香和在糯米粥裡，滑潤的口感，搭配紅棗鮮甜中帶點微酸，嚐一口就能感受到食材搭配的完美結合，呈現了煙霧繚繞的廚房裡，阿嬤的古早味私房料理的想念。</p><p>&nbsp;</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%9C%93%E7%B3%AF%E7%B1%B3&amp;utm_medium=ingredient&amp;utm_source=recipe\">圓糯米</a></p><p>120g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B0%B4&amp;utm_medium=ingredient&amp;utm_source=recipe\">水</a></p><p>800g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%A1%82%E5%9C%93&amp;utm_medium=ingredient&amp;utm_source=recipe\">桂圓</a></p><p>60g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B4%85%E6%A3%97&amp;utm_medium=ingredient&amp;utm_source=recipe\">紅棗</a></p><p>20g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%BB%91%E7%B3%96&amp;utm_medium=ingredient&amp;utm_source=recipe\">黑糖</a></p><p>55g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3%E9%85%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">米酒</a></p><p>20g</p><p>&nbsp;</p><p><strong>1</strong></p><p>將圓糯米洗淨，泡水2小時，瀝乾水份，放入電子鍋內。</p><p>&nbsp;</p><p><strong>2</strong></p><p>加入桂圓肉。</p><p>&nbsp;</p><p><strong>3</strong></p><p>紅棗泡水洗淨，放入電子鍋內。</p><p>&nbsp;</p><p><strong>4</strong></p><p>加入水，送進電子鍋內，按下開關燉煮，待開關跳起來就可以取出來。</p><p>&nbsp;</p><p><strong>5</strong></p><p>加入黑糖拌勻。</p><p>&nbsp;</p><p><strong>6</strong></p><p>淋上米酒提香。</p><p>&nbsp;</p><p><strong>7</strong></p><p>美味上桌嘍。</p>', '2019-12-02 10:36:06', 15, 'http://localhost:6003/images/forum/15/49ff4b6c7dec681ffb6a53e5bfc51d04.jpg', 0),
(60, '【分享】威靈頓牛排', '1', '派對同樂', 0, 0, '<p>表皮酥脆、牛肉軟嫩多汁，適合宴客的一道菜</p><p>份量</p><p>2 人份</p><p>時間</p><p>60 分鐘</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%8E%9A%E5%88%87%E7%89%9B%E6%8E%92%EF%BC%88%E5%AB%A9%E8%82%A9%EF%BC%89&amp;utm_medium=ingredient&amp;utm_source=recipe\">厚切牛排（嫩肩）</a></p><p>2塊</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%98%91%E8%8F%87&amp;utm_medium=ingredient&amp;utm_source=recipe\">蘑菇</a></p><p>200g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%9F%B9%E6%A0%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">培根</a></p><p>6片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%85%A5%E7%9A%AE&amp;utm_medium=ingredient&amp;utm_source=recipe\">酥皮</a></p><p>4片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%B9%BD&amp;utm_medium=ingredient&amp;utm_source=recipe\">鹽</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%BB%91%E8%83%A1%E6%A4%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">黑胡椒</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%BB%83%E8%8A%A5%E6%9C%AB%E9%86%AC&amp;utm_medium=ingredient&amp;utm_source=recipe\">黃芥末醬</a></p><p>適量</p><p><strong>1</strong></p><p>蘑菇切小塊，放入手動調理機，切成碎末狀備用</p><p>&nbsp;</p><p><strong>2</strong></p><p>要切成這種碎末喔</p><p>&nbsp;</p><p><strong>3</strong></p><p>將切好的蘑菇，放入不沾鍋內，加入少許的鹽、黑胡椒調味，以小火慢慢炒，這個步驟要有點耐心，要炒至蘑菇水份完全炒乾為止</p><p>&nbsp;</p><p><strong>4</strong></p><p>不久蘑菇水份會慢慢釋出</p><p>&nbsp;</p><p><strong>5</strong></p><p>炒至蘑菇呈現咖啡色狀，用湯匙壓，不會跑出水份即可</p><p>&nbsp;</p><p><strong>6</strong></p><p>再炒蘑菇的同時，順便處理牛肉，邊邊有筋的地方，要先剔除，不然會影響口感喔！燒熱鍋子，將牛排外層先煎至微焦，等會烘烤的過程，能夠將肉汁鎖住</p><p>&nbsp;</p><p><strong>7</strong></p><p>煎好的牛排，趁熱再外層刷上黃芥末醬（側面、背面都要喔），刷好後，放入冰箱冷藏10分鐘</p><p>&nbsp;</p><p><strong>8</strong></p><p>平鋪一張保鮮膜，將炒好的蘑菇平鋪後，放上牛排（這次買的牛肉不夠厚，所以我將兩塊堆疊在一起），將牛排捲起</p><p>&nbsp;</p><p><strong>9</strong></p><p>捲好後再放入冰箱冷藏定型，約30分鐘</p><p>&nbsp;</p><p><strong>10</strong></p><p>鋪一張保鮮膜，放上培根（因該要用生火腿片，沒買到，我用培根替代）放上捲好蘑菇的牛排，再用培根將其包裹住</p><p>&nbsp;</p><p><strong>11</strong></p><p>包裹好的牛排，靜置一會，使其定型</p><p>&nbsp;</p><p><strong>12</strong></p><p>將酥皮放置室溫回溫一下，比較好操作！ 將酥皮結合成一張大酥皮，黏合處用蛋液將其黏合起來，黏合處稍微按壓一下，以免鬆開</p><p>&nbsp;</p><p><strong>13</strong></p><p>將捲好培根的牛排，放在黏合好的酥皮上，用酥皮將牛排包裹住</p><p>&nbsp;</p><p><strong>14</strong></p><p>包好的牛排，在酥皮表面，刷上蛋液，用刀子在表皮劃上幾刀，將其移至氣炸鍋，以180度氣炸15-20分鐘（視牛排大小調整溫度</p><p>&nbsp;</p><p><strong>15</strong></p><p>完成囉</p><p>&nbsp;</p>', '2019-12-02 10:38:44', 15, 'http://localhost:6003/images/forum/15/4c60778d412ac6986669a53feb257a35.jpg', 0),
(63, '【分享】黑蒜頭香菇雞湯', '1', '入冬滋補', 0, 0, '<p>最近超流行黑蒜雞湯 &nbsp;我也來跟流行一下&nbsp; 剛好天氣轉涼 &nbsp;來補補身一下</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%A3%92%E6%A3%92%E9%9B%9E%E8%85%BF&amp;utm_medium=ingredient&amp;utm_source=recipe\">棒棒雞腿</a></p><p>6-8隻</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E4%B9%BE%E9%A6%99%E8%8F%87&amp;utm_medium=ingredient&amp;utm_source=recipe\">乾香菇</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%BB%91%E8%92%9C%E9%A0%AD&amp;utm_medium=ingredient&amp;utm_source=recipe\">黑蒜頭</a></p><p>15-20瓣</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%80%81%E8%96%91%E7%89%87&amp;utm_medium=ingredient&amp;utm_source=recipe\">老薑片</a></p><p>6片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B4%85%E6%A3%97&amp;utm_medium=ingredient&amp;utm_source=recipe\">紅棗</a></p><p>些許</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%9E%84%E6%9D%9E&amp;utm_medium=ingredient&amp;utm_source=recipe\">构杞</a></p><p>些許</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%A1%A9&amp;utm_medium=ingredient&amp;utm_source=recipe\">塩</a></p><p>些許</p><p><strong>1</strong></p><p>乾香菇洗乾淨之後，放熱水泡軟，香菇水留下備用，其他材料備好</p><p>&nbsp;</p><p><strong>2</strong></p><p>紅棗枸杞洗淨備用</p><p>&nbsp;</p><p><strong>3</strong></p><p>冷水鍋放入薑片及雞腿，煮滾一下，去血水，把雞腿沖洗乾淨備用</p><p>&nbsp;</p><p><strong>4</strong></p><p>準備湯鍋：香菇和香菇水，再加一點水</p><p><strong>5</strong></p><p>加入黑蒜頭，三片薑</p><p><strong>6</strong></p><p>把雞腿放入，煮沸之後，中小火煮30分鐘</p><p>&nbsp;</p><p><strong>7</strong></p><p>加入紅棗枸杞，再煮小滾20分鐘，調味一下</p><p>&nbsp;</p><p><strong>8</strong></p><p>完成！</p><p>&nbsp;</p>', '2019-12-02 10:50:43', 3, 'http://localhost:6003/images/forum/3/4a776d4723db1c0dfceacf6c8a5def7e.jpg', 0);
INSERT INTO `forum_categories` (`forum_id`, `forum_title`, `forum_class`, `forum_type`, `forum_good`, `forum_collect`, `forum_content`, `create_date`, `create_user`, `forum_image`, `forum_browse`) VALUES
(64, '【分享】香菇雞湯', '1', '入冬滋補', 0, 0, '<p>我想香菇雞湯這道料理，應該是每個學做菜的朋友都會嘗試的吧？因為它真的很容易做，以前我們的做法都是把香菇和雞和老薑一起丟進去，然後，放入大同電鍋裡，外鍋一杯半的水，跳起來加點鹽巴和米酒就可以喝了是吧？但是每一次我這樣煮完香菇雞總覺得少了一些香氣，雞湯也不夠濃郁，於是這次我稍微改變了一點點做法，也是參考香菇雞湯阿基師食譜教的方式。</p><p>份量</p><p>3 人份</p><p>時間</p><p>90 分鐘</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%9B%9E%E8%85%BF%E6%8E%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">雞腿排</a></p><p>2支</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%A6%99%E8%8F%87&amp;utm_medium=ingredient&amp;utm_source=recipe\">香菇</a></p><p>10多朵</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%96%91&amp;utm_medium=ingredient&amp;utm_source=recipe\">薑</a></p><p>兩三片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%94%AD%E7%93%9C&amp;utm_medium=ingredient&amp;utm_source=recipe\">蔭瓜</a></p><p>兩三片</p><p>&nbsp;</p><p><strong>1</strong></p><p>1.用熱水燙過雞肉 2.把香菇泡水 泡軟</p><p><strong>2</strong></p><p>用一點麻油炒薑，加入川燙過後的雞腿稍微拌炒一下</p><p><strong>3</strong></p><p>把稍微炒過的料放到湯鍋裡後加水 把香菇放入 也把泡香菇的水倒入 開始燉煮 用瓦斯爐要燉一小時比較有香味</p><p><strong>4</strong></p><p>燉了約30-40分鐘後 可以加入蔭瓜兩三片 增添一點鹹味 我是買超市的蔭瓜罐頭</p><p><strong>5</strong></p><p>燉煮一小時後 可以放鹽試試味道 就可以吃啦～</p><p>小撇步</p><p>香菇用乾香菇會更香</p>', '2019-12-02 10:56:28', 3, 'http://localhost:6003/images/forum/3/c5a3de611d8930ea7abf43dca8a637bc.jpg', 1),
(65, '【分享】湯頭濃郁麻油雞湯', '1', '入冬滋補', 0, 0, '<p>用全酒燒過的雞肉與湯非常甜美.簡單的料理一定要試試~</p><p>份量</p><p>4 人份</p><p>時間</p><p>45 分鐘</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%9C%9F%E9%9B%9E&amp;utm_medium=ingredient&amp;utm_source=recipe\">土雞</a></p><p>半隻</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%9C%9F%E9%9B%9E%E8%85%BF&amp;utm_medium=ingredient&amp;utm_source=recipe\">土雞腿</a></p><p>一隻</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%96%91%E7%89%87&amp;utm_medium=ingredient&amp;utm_source=recipe\">薑片</a></p><p>30克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B4%85%E6%A3%97&amp;utm_medium=ingredient&amp;utm_source=recipe\">紅棗</a></p><p>隨意</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%9E%B8%E6%9D%9E&amp;utm_medium=ingredient&amp;utm_source=recipe\">枸杞</a></p><p>隨意</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%BA%BB%E6%B2%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">麻油</a></p><p>一份</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3%E9%85%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">米酒</a></p><p>適量</p><p>&nbsp;</p><p><strong>1</strong></p><p>薑切片.放入冷麻油中小火加熱煎至薑片稍微捲起就可以放入清理好的雞塊不見血水..倒入米酒至雞肉的一半.蓋起鍋蓋煮30分鐘..</p><p>&nbsp;</p><p><strong>2</strong></p><p>開蓋後再加入另一半的酒蓋上鍋蓋煮開(會著火所以鍋蓋要蓋起來..我上次沒注意到就燒到頭髮了~~哈哈還好沒變禿頭千萬要小心啊)只要燒到點火後就可以開鍋蓋轉小火將是先泡過水的紅棗與枸杞加進去稍微煮一下就可以起鍋了</p><p><strong>3</strong></p><p>這樣全酒的雞肉煮過三十分鐘後.湯頭非常的甜美與一般我們吃過的麻油雞差很多.天氣冷了大家可以試一試.非常簡單的料理但是超級美味...隨鍋附上一碗麵線.可以拌點醬油與雞湯就是完美的一餐了</p>', '2019-12-02 10:59:37', 3, 'http://localhost:6003/images/forum/3/303c7a4fc478aeebc04367f12d197808.jpg', 0),
(66, '【分享】泰式黃咖哩炒蟹', '1', '時令美味', 0, 0, '<p>這道泰式菜色一般常見的主要食材是螃蟹~</p><p>不過自己在家裡做的話就用蝦仁或是蝦子替代就可以囉~</p><p>媽媽剛好在市場看到肥肥大頭的泰國蝦~</p><p>就買了一斤泰國蝦回家孝敬老爺!</p><p>&nbsp;</p><p>份量</p><p>4 人份</p><p>時間</p><p>30 分鐘</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%9E%83%E8%9F%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">螃蟹</a></p><p>5隻400g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B3%B0%E5%BC%8F%E9%BB%83%E5%92%96%E5%93%A9&amp;utm_medium=ingredient&amp;utm_source=recipe\">泰式黃咖哩</a></p><p>1包300g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%94%9C%E6%A4%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">甜椒</a></p><p>150g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%BE%A3%E6%A4%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">辣椒</a></p><p>1根</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%96%91%E7%89%87&amp;utm_medium=ingredient&amp;utm_source=recipe\">薑片</a></p><p>5片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B4%8B%E8%94%A5&amp;utm_medium=ingredient&amp;utm_source=recipe\">洋蔥</a></p><p>80g</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%A0%94%E6%B2%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">蠔油</a></p><p>1大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%AD%9A%E9%9C%B2&amp;utm_medium=ingredient&amp;utm_source=recipe\">魚露</a></p><p>1小匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B3%96&amp;utm_medium=ingredient&amp;utm_source=recipe\">糖</a></p><p>0.5大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3%E9%85%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">米酒</a></p><p>1大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%9B%8B&amp;utm_medium=ingredient&amp;utm_source=recipe\">蛋</a></p><p>2個</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%98%BF%E5%8B%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">蘿勒</a></p><p>一些</p><p>&nbsp;</p><p><strong>1</strong></p><p>朋友送的澎湖石蟹，在當地捉到後就水煮煮熟了。</p><p>&nbsp;</p><p><strong>2</strong></p><p>將螃蟹洗淨，去殼切半，清除蟹鰓。</p><p>&nbsp;</p><p><strong>3</strong></p><p>這次用現成的黃咖哩包。</p><p>&nbsp;</p><p><strong>4</strong></p><p>炒鍋熱鍋加油後，炒軟洋蔥絲，放入薑片和辣椒續炒。辣椒可因個人喜好加減。</p><p>&nbsp;</p><p><strong>5</strong></p><p>放入黃咖哩醬和稀釋50cc的水。</p><p>&nbsp;</p><p><strong>6</strong></p><p>放入甜椒，加入蠔油。</p><p>&nbsp;</p><p><strong>7</strong></p><p>加入魚露和糖。</p><p>&nbsp;</p><p><strong>8</strong></p><p>將螃蟹放入，小火煮個3-5分鐘，讓螃蟹入味。</p><p>&nbsp;</p><p><strong>9</strong></p><p>加入米酒。</p><p>&nbsp;</p><p><strong>10</strong></p><p>加入蛋汁，煮1分鐘。</p><p>&nbsp;</p><p><strong>11</strong></p><p>煮好就可以起鍋了。</p><p>&nbsp;</p><p><strong>12</strong></p><p>盛盤，灑上蘿勒或香菜。咖哩湯汁鮮美濃郁，螃蟹新鮮入味，很下飯的一道菜，好吃。</p>', '2019-12-02 11:04:31', 3, 'http://localhost:6003/images/forum/3/7d9b19dd862665e4819a40546599f747.jpg', 0),
(67, '【分享】黑胡椒奶油蟹', '1', '時令美味', 0, 0, '<p>去過新加坡的朋友相信都知道香辣好吃的黑胡椒奶油蟹，醬汁是重點！螃蟹不過油直接用優質橄欖油入鍋炒出香氣，再倒入醬汁熬煮到濃稠，讓每一口螃蟹都香濃美味～這個醬汁用來沾麵包、炒蝦、拌麵或炒肉類都會很好吃喔！！</p>', '2019-12-02 11:07:10', 3, 'http://localhost:6003/images/forum/3/de73511016a9b04fcc972232a0f9f1eb.jpg', 0),
(69, '【分享】日式蓮藕炸肉餅', '1', '時令美味', 0, 0, '<p>蓮藕的季節又到了,除了燉湯外,炸蓮藕是日本常見的料理方式~這次變化成蓮藕肉餅三明治,就是道美味的蓮藕料理唷^^</p><p>&nbsp;</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%9B%9E%E8%83%B8%E8%82%89&amp;utm_medium=ingredient&amp;utm_source=recipe\">雞胸肉</a></p><p>250-300克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%93%AE%E8%97%95&amp;utm_medium=ingredient&amp;utm_source=recipe\">蓮藕</a></p><p>400-500克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%94%A5%E8%8A%B1&amp;utm_medium=ingredient&amp;utm_source=recipe\">蔥花</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%83%A1%E6%A4%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">胡椒</a></p><p>適量</p><p>雞絞肉醃料</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%92%9C%E6%B3%A5&amp;utm_medium=ingredient&amp;utm_source=recipe\">蒜泥</a></p><p>一匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%86%AC%E6%B2%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">醬油</a></p><p>兩匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3%E9%85%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">米酒</a></p><p>一匙</p><p>醬汁</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%86%AC%E6%B2%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">醬油</a></p><p>兩大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%91%B3%E9%86%82&amp;utm_medium=ingredient&amp;utm_source=recipe\">味醂</a></p><p>一大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B0%B4&amp;utm_medium=ingredient&amp;utm_source=recipe\">水</a></p><p>三大匙</p><p>&nbsp;</p><p><strong>1</strong></p><p>將絞肉加入洋蔥拌勻</p><p>&nbsp;</p><p><strong>2</strong></p><p>加入醬油,米酒,味霖用筷子順時針攪拌均勻,慢慢加入水或高湯拌勻,讓肉吸收水分</p><p>&nbsp;</p><p><strong>3</strong></p><p>蓮藕削皮切片</p><p>&nbsp;</p><p><strong>4</strong></p><p>中間夾入肉餡,裹上雞蛋液,再裹上麵粉</p><p>&nbsp;</p><p><strong>5</strong></p><p>入油鍋煎炸至表面金黃熟透</p><p>&nbsp;</p><p><strong>6</strong></p><p>瀝油後起鍋即可食用</p>', '2019-12-02 11:12:50', 5, 'http://localhost:6003/images/forum/5/8e65a0762ad0f2989020cb245e822e58.jpg', 0),
(70, '【分享】蓮藕蘿蔔雞湯', '1', '時令美味', 0, 0, '<p>秋意漸濃，喝什麼湯好呢？來碗簡單又營養易作的熱湯吧！蓮藕的香蘿蔔的甜和脆脆的蓽薺加上雞肉湯汁，只加了鹽巴整體味道非常豐富，大人小孩都適合。</p><p>&nbsp;</p><p>時間</p><p>20 分鐘</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%93%AE%E8%97%95&amp;utm_medium=ingredient&amp;utm_source=recipe\">蓮藕</a></p><p>287克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B4%85%E8%98%BF%E8%94%94&amp;utm_medium=ingredient&amp;utm_source=recipe\">紅蘿蔔</a></p><p>124克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%99%BD%E8%98%BF%E8%94%94&amp;utm_medium=ingredient&amp;utm_source=recipe\">白蘿蔔</a></p><p>258克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%93%BD%E8%96%BA&amp;utm_medium=ingredient&amp;utm_source=recipe\">蓽薺</a></p><p>56克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%9B%9E%E8%85%BF%E8%82%89&amp;utm_medium=ingredient&amp;utm_source=recipe\">雞腿肉</a></p><p>404克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B0%B4&amp;utm_medium=ingredient&amp;utm_source=recipe\">水</a></p><p>1500CC</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%B9%BD%E5%B7%B4&amp;utm_medium=ingredient&amp;utm_source=recipe\">鹽巴</a></p><p>1.5-2匙</p><p>&nbsp;</p><p><strong>1</strong></p><p>先將蓮藕蘿蔔洗淨切小塊。</p><p>&nbsp;</p><p><strong>2</strong></p><p>放入1500CC水煮滾，後將所有食材加入。（雞肉可先過熱水，避免血水濁了湯）</p><p>&nbsp;</p><p><strong>3</strong></p><p>雞肉過熱水。（此步驟可省略）</p><p>&nbsp;</p><p><strong>4</strong></p><p>放完所有食材後煮滾，再加1.5匙-2匙鹽巴，蓋鍋蓋中火煮20分鐘即可。（20分鐘後熄火蓋鍋悶20分鐘肉蘿蔔，味道會更好，軟嫩）。</p><p>小撇步</p><p>煮沸後要把湯面的黑泡泡撈掉。</p>', '2019-12-02 11:16:06', 5, 'http://localhost:6003/images/forum/5/6199b6cd4833536e1365470904f2250e.jpg', 0),
(71, '【分享】麻油栗子地瓜炊飯', '1', '時令美味', 0, 0, '<p>昨天做的栗子地瓜甜湯,利用同樣的食材,只是不同的調味就能變成另一道暖身又好吃的正餐\"麻油炊飯\"</p><p>&nbsp;</p><p>份量</p><p>4 人份</p><p>時間</p><p>30 分鐘</p><p>熱量</p><p>看熱量</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3&amp;utm_medium=ingredient&amp;utm_source=recipe\">米</a></p><p>2杯</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%A0%97%E5%AD%90&amp;utm_medium=ingredient&amp;utm_source=recipe\">栗子</a></p><p>5顆</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%9C%B0%E7%93%9C&amp;utm_medium=ingredient&amp;utm_source=recipe\">地瓜</a></p><p>1條</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%BA%BB%E6%B2%B9&amp;utm_medium=ingredient&amp;utm_source=recipe\">麻油</a></p><p>1大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3%E9%85%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">米酒</a></p><p>1大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B0%B4&amp;utm_medium=ingredient&amp;utm_source=recipe\">水</a></p><p>2杯</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%B9%BD&amp;utm_medium=ingredient&amp;utm_source=recipe\">鹽</a></p><p>2小匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%80%81%E8%96%91&amp;utm_medium=ingredient&amp;utm_source=recipe\">老薑</a></p><p>5片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%A6%99%E8%8F%9C&amp;utm_medium=ingredient&amp;utm_source=recipe\">香菜</a></p><p>適量</p><p>&nbsp;</p><p><strong>1</strong></p><p>除了香菜和鹽巴,將所有食材通通混合</p><p>&nbsp;</p><p><strong>2</strong></p><p>放入電子鍋中,按下煮飯鍵,等按鍵跳起後加入鹽巴拌勻,繼續悶15分鐘</p><p>&nbsp;</p><p><strong>3</strong></p><p>起鍋後灑上香菜就完成囉~</p>', '2019-12-02 11:43:56', 5, 'http://localhost:6003/images/forum/5/7ad8be31c434b0c5837cc35c44aba090.jpg', 0),
(72, '【分享】冰糖銀耳蓮子湯', '1', '時令美味', 0, 0, '<p>銀耳，又稱白木耳或雪耳，白木耳含有豐富的膠質，是一種多醣體，具有保濕、滋潤的效果，因此對肌膚保養有很多好處唷~這道甜湯不論是熱的吃或冰著吃都可以，甜度都可以依個人喜好調整，紅棗與枸杞本身就帶有甜味，所以煮完後喝起來其實就有味道囉，怕胖的我習慣不加糖就這樣吃了~</p><p>&nbsp;</p><p>份量</p><p>5 人份</p><p>時間</p><p>120 分鐘</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%93%AE%E5%AD%90&amp;utm_medium=ingredient&amp;utm_source=recipe\">蓮子</a></p><p>80克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%99%BD%E6%9C%A8%E8%80%B3&amp;utm_medium=ingredient&amp;utm_source=recipe\">白木耳</a></p><p>35克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%9E%B8%E6%9D%9E&amp;utm_medium=ingredient&amp;utm_source=recipe\">枸杞</a></p><p>2大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B4%85%E6%A3%97&amp;utm_medium=ingredient&amp;utm_source=recipe\">紅棗</a></p><p>10粒</p><p>調味料</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%86%B0%E7%B3%96&amp;utm_medium=ingredient&amp;utm_source=recipe\">冰糖</a></p><p>3大匙</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B8%85%E6%B0%B4&amp;utm_medium=ingredient&amp;utm_source=recipe\">清水</a></p><p>1800cc</p><p>&nbsp;</p><p><strong>1</strong></p><p>將蓮子一一挑選，確認蓮子心是否完全去除，沒有去乾淨的蓮子心可以用牙籤剃除乾淨，蓮子心吃起來帶苦，沒去除乾淨會影響口感喔~ 去乾淨的蓮子洗淨備用，不用浸泡~</p><p>&nbsp;</p><p><strong>2</strong></p><p>這個就是蓮子心~</p><p>&nbsp;</p><p><strong>3</strong></p><p>將水淹過白木耳，水可以多一點讓木耳可以吸飽水分，浸泡約2-3個小時</p><p><strong>4</strong></p><p>浸泡軟的白木耳用剪刀剪去黃蒂頭，再稍微將木耳剪碎，這樣煮起來可以更快讓膠質釋出來</p><p>&nbsp;</p><p><strong>5</strong></p><p>將洗淨瀝乾的白木耳、蓮子、枸杞、紅棗放入鍋中，再注入清水1800cc淹過食材</p><p>&nbsp;</p><p><strong>6</strong></p><p>火煮滾後轉小火，小火烹煮2小時，再加入冰糖繼續悶煮即可</p>', '2019-12-02 11:52:24', 5, 'http://localhost:6003/images/forum/5/40c9c0fc02a95b93cd643142eb4ca852.jpg', 0),
(73, '【分享】鹹菜米血鴨湯快鍋版', '1', '時令美味', 0, 0, '<p>等待夜歸的家人 煮一鍋暖暖熱湯<br>一鍋到底不費力<br>冷冷的夜晚,暖心又暖胃<br>換個烹調順序不只能燉煮出好喝的鹹菜鴨湯<br>鴨肉更是軟嫩入味<br>微鹹微酸好吃好喝又順口</p><p>&nbsp;</p><p>份量</p><p>5 人份</p><p>時間</p><p>20 分鐘</p><p>食材</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E5%9C%9F%E7%95%AA%E9%B4%A8&amp;utm_medium=ingredient&amp;utm_source=recipe\">土番鴨</a></p><p>1 隻</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%B9%B9%E8%8F%9C&amp;utm_medium=ingredient&amp;utm_source=recipe\">鹹菜</a></p><p>300 公克</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3%E8%A1%80&amp;utm_medium=ingredient&amp;utm_source=recipe\">米血</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E7%B1%B3%E9%85%92&amp;utm_medium=ingredient&amp;utm_source=recipe\">米酒</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%96%91%E7%89%87&amp;utm_medium=ingredient&amp;utm_source=recipe\">薑片</a></p><p>5片</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E8%96%91%E7%B5%B2&amp;utm_medium=ingredient&amp;utm_source=recipe\">薑絲</a></p><p>適量</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E6%B0%B4&amp;utm_medium=ingredient&amp;utm_source=recipe\">水</a></p><p>1800㏄</p><p><a href=\"https://icook.tw/recipes/search?ingredients=%E9%B9%BD&amp;utm_medium=ingredient&amp;utm_source=recipe\">鹽</a></p><p>1大匙</p><p>&nbsp;</p><p><strong>1</strong></p><p>鴨肉放入滾水汆燙2～3分鐘去雜質血水， 再用冷水清洗殘渣放入快鍋加入薑片與適量水蓋過鴨肉 蓋上蓋子水滾後快鍋壓力閥發出七七的聲音轉中小火煮12分鐘關火 待壓力閥下降後打開清澈的鴨湯非常香</p><p><strong>2</strong></p><p>鹹菜可切塊狀或絲狀</p><p>&nbsp;</p><p><strong>3</strong></p><p>在開火將鹹菜與薑絲放入煮滾後加入適量米酒</p><p>&nbsp;</p><p><strong>4</strong></p><p>最後將米血放入加入適量調味完成</p><p>&nbsp;</p><p><strong>5</strong></p><p>若是一般湯鍋蓋緊鍋蓋開中火煮約45分鐘，最後再加入鹹菜與米血及所有調味料即可。</p>', '2019-12-02 11:54:10', 5, 'http://localhost:6003/images/forum/5/a2d3f2b30ba24aaa85b1728efcb351dc.jpg', 0),
(75, '【分享】銀耳梨子湯', '1', '時令美味', 0, 0, '<p>中醫認為，五行（木、火、土、金、水）　分別對應人體五臟（肝、心、脾、肺、腎）及一年四季。</p><p>五行中，白色入肺對應秋季，這時多吃白色食物，可緩解秋燥傷肺，滋陰潤燥，讓皮膚也舒緩保濕，養顏美容。</p><p>銀耳是自古以來的美容聖品，又稱平民燕窩，而梨子潤肺、止咳、消痰、降火，但性寒，體質性寒者不宜多食，所以燉成湯，緩解其寒性。</p><p>另外加入紅棗和枸杞補血養顏，就是一道簡易養生美容甜品囉。</p><p>&nbsp;</p><p><strong>1</strong></p><p>銀耳切掉底部後洗淨，撕成小塊泡水，紅棗上面劃數刀，梨子削皮切小塊備用。</p><p>&nbsp;</p><p><strong>2</strong></p><p>電鍋內鍋放入銀耳及紅棗，再加入１，０００cc水，外鍋放１．５杯水按下開關煮。</p><p>&nbsp;</p><p><strong>3</strong></p><p>開關跳起後，加入枸杞及梨子，外鍋再放１杯水按下開關。</p><p>&nbsp;</p><p><strong>4</strong></p><p>開關跳起悶１０分鐘，接著取出放涼，溫度降低再加入蜂蜜拌勻，就有潤肺甜湯享用囉</p><p>小撇步</p><p>１．紅棗上面劃刀作用為幫助味道釋出，其實還可以在煮前泡水，但我每次都懶……就用劃刀代替了～哈哈。</p><p>２．枸杞有養肝明目的效果，如果是最近電腦或手機看很久的朋友，可以多加一些護眼。</p><p>３．紅棗枸杞和梨子都有甜度，所以蜂蜜只加一些就有甜味了。</p>', '2019-12-02 12:51:36', 5, 'http://localhost:6003/images/forum/5/201861004c9381d8200181680531b0e6.jpg', 0),
(77, '【分享】四神排骨湯', '1', '入冬滋補', 0, 0, '<p>天氣微涼燉鍋簡單的養生食補（四神排骨湯），四神湯是不溫不涼的藥材各種體質都適合，今天加入排骨適量米酒少許鹽非常美味</p><p>&nbsp;</p><p><strong>1</strong></p><p>所需食材</p><p>&nbsp;</p><p><strong>2</strong></p><p>步驟： 1.冷水時排骨放入鍋中蓋上鍋蓋開火 2~3.水滾後撈起排骨 4.排骨撈起後用冷水洗淨</p><p>&nbsp;</p><p><strong>3</strong></p><p>將洗淨排骨放入鍋中 再放入四神湯中藥材</p><p>&nbsp;</p><p><strong>4</strong></p><p>加入適量水與半碗米酒 碗我用一般吃飯用大小的碗（米酒依個人喜好添加） 一直燉約30分鐘起鍋前再加入半碗米酒和適量鹽 稍滾個1分鐘起鍋</p><p>小撇步</p><p>買四神湯藥材時要問一下店家是否需浸泡<br>我買的是免浸泡的四神湯藥材可直接煮<br>1帖是80元</p>', '2019-12-02 12:55:13', 21, 'http://localhost:6003/images/forum/21/a8b32c1cbd86573f4111172c9639cc74.jpg', 0),
(78, '【分享】蓮藕燉豬腳', '1', '入冬滋補', 0, 0, '<p>秋季盛產的蓮藕鬆軟美味，搭配上香Q可口的豬腳，真的好好吃 你一定要煮一鍋試試看，白飯別忘了多準備一點哦！</p>', '2019-12-02 13:01:54', 21, 'http://localhost:6003/images/forum/21/ceb4a534fbe27f2010ed056f3cbd4558.jpg', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `forum_class`
--

CREATE TABLE `forum_class` (
  `forum_class_id` int(11) NOT NULL,
  `forum_class_desc` varchar(100) NOT NULL,
  `forum_type` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `forum_class`
--

INSERT INTO `forum_class` (`forum_class_id`, `forum_class_desc`, `forum_type`) VALUES
(1, '- 料理分享', '人氣主題'),
(1, '- 料理分享', '入冬滋補'),
(1, '- 料理分享', '時令美味'),
(1, '- 料理分享', '派對同樂'),
(2, '- 餐廳推薦', '活力中部'),
(2, '- 餐廳推薦', '熱情南部'),
(2, '- 餐廳推薦', '迷人外島'),
(2, '- 餐廳推薦', '魅力北部'),
(3, '- 養身要知道', '冬'),
(3, '- 養身要知道', '夏'),
(3, '- 養身要知道', '春'),
(3, '- 養身要知道', '秋'),
(4, '- 小農不簡單', '閒聊');

-- --------------------------------------------------------

--
-- 資料表結構 `forum_collection`
--

CREATE TABLE `forum_collection` (
  `customer_id` int(11) NOT NULL,
  `forum_id` int(11) NOT NULL,
  `collect_good_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `forum_collection`
--

INSERT INTO `forum_collection` (`customer_id`, `forum_id`, `collect_good_type`) VALUES
(1, 20, 'collect'),
(1, 20, 'good'),
(1, 45, 'collect'),
(1, 45, 'good'),
(1, 46, 'collect'),
(1, 46, 'good'),
(2, 17, 'collect'),
(2, 17, 'good'),
(2, 20, 'collect'),
(2, 20, 'good'),
(2, 47, 'collect'),
(2, 47, 'good'),
(2, 48, 'collect'),
(2, 48, 'good'),
(2, 49, 'collect'),
(2, 49, 'good'),
(2, 80, 'collect'),
(2, 80, 'good'),
(2, 81, 'collect'),
(2, 81, 'good'),
(2, 82, 'collect'),
(2, 82, 'good'),
(2, 83, 'collect'),
(2, 83, 'good'),
(2, 84, 'collect'),
(2, 84, 'good'),
(2, 85, 'collect'),
(2, 85, 'good'),
(2, 86, 'collect'),
(2, 86, 'good'),
(2, 87, 'collect'),
(2, 87, 'good'),
(5, 1, 'collect'),
(5, 1, 'good'),
(5, 17, 'collect'),
(5, 17, 'good'),
(5, 20, 'collect'),
(5, 20, 'good'),
(5, 22, 'collect'),
(5, 22, 'good'),
(5, 23, 'collect'),
(5, 23, 'good'),
(5, 24, 'collect'),
(5, 24, 'good'),
(5, 28, 'collect'),
(5, 28, 'good'),
(21, 25, 'collect'),
(21, 25, 'good'),
(21, 51, 'collect'),
(21, 51, 'good');

-- --------------------------------------------------------

--
-- 資料表結構 `forum_message`
--

CREATE TABLE `forum_message` (
  `message_id` int(11) NOT NULL,
  `message_content` varchar(1000) DEFAULT NULL,
  `message_good` int(11) DEFAULT NULL,
  `forum_id` int(11) DEFAULT NULL,
  `create_user` int(11) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `forum_message`
--

INSERT INTO `forum_message` (`message_id`, `message_content`, `message_good`, `forum_id`, `create_user`, `create_date`) VALUES
(2, '初學者真的可以做出來耶', 0, 1, 2, '2019-11-13 00:00:00'),
(5, '豬排好好吃', NULL, 1, 23, '2019-11-25 10:33:38'),
(6, 'goooooooooooooooodd', NULL, 4, 1, '2019-11-25 10:45:11'),
(7, '哇 太棒了 馬上做吧', NULL, 17, 15, '2019-11-25 15:57:12'),
(8, '朝棒啦', NULL, 38, 1, '2019-11-25 16:00:58'),
(10, '簡單輕鬆料理 超棒', NULL, 17, 2, '2019-11-27 11:21:28'),
(11, '喜歡吃水煮杏鮑菇了~~', NULL, 20, 2, '2019-11-27 11:22:59'),
(12, '請問要去哪裡買沙律菜?', NULL, 17, 21, '2019-11-27 11:24:40'),
(13, '超好吃的', NULL, 17, 23, '2019-11-27 11:36:33'),
(15, '我也覺得很好吃', NULL, 41, 23, '2019-11-27 12:00:49'),
(16, '男朋友很喜歡 謝謝分享', NULL, 17, 3, '2019-11-27 13:44:09'),
(17, '歡迎大家動手做做看', NULL, 1, 21, '2019-11-27 14:03:53'),
(18, '好吃蔬菜', NULL, 42, 1, '2019-11-27 14:23:53'),
(22, '很好吃 麻麻假日有煮給我吃', NULL, 20, 5, '2019-11-28 13:45:40'),
(23, '做得很成功 謝謝~', NULL, 17, 5, '2019-11-28 13:46:41'),
(24, '很好吃', NULL, 24, 5, '2019-11-28 13:47:36'),
(31, '讚', NULL, 20, 2, '2019-11-29 16:18:08');

-- --------------------------------------------------------

--
-- 替換檢視表以便查看 `keysearch`
-- (請參考以下實際畫面)
--
CREATE TABLE `keysearch` (
`name` varchar(255)
,`type` varchar(13)
);

-- --------------------------------------------------------

--
-- 資料表結構 `main_cart`
--

CREATE TABLE `main_cart` (
  `cart_id` int(11) UNSIGNED NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `create_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `main_cart`
--

INSERT INTO `main_cart` (`cart_id`, `customer_information`, `create_at`) VALUES
(1, 1, '2019-08-23 00:00:00'),
(2, 2, '2019-08-23 00:00:00'),
(3, 3, NULL),
(5, 21, NULL),
(7, 23, NULL),
(11, 33, NULL),
(19, 42, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `main_order`
--

CREATE TABLE `main_order` (
  `order_id` int(11) UNSIGNED NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `create_at` varchar(255) DEFAULT NULL,
  `pm_event` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `main_order`
--

INSERT INTO `main_order` (`order_id`, `customer_information`, `create_at`, `pm_event`) VALUES
(110, 1, '2019-11-22 17:12:50', 51),
(111, 1, '2019-10-22 17:14:50', 51),
(112, 1, '2019-11-22 18:22:51', 51),
(113, 1, '2019-11-22 19:30:23', 51),
(114, 1, '2019-10-22 19:33:20', 51),
(115, 1, '2019-11-22 19:33:53', 51),
(116, 1, '2019-09-22 19:38:11', 50),
(117, 1, '2019-11-22 19:40:11', 50),
(118, 1, '2019-11-25 15:04:45', 52),
(119, 1, '2019-08-25 15:06:45', 52),
(120, 1, '2019-10-25 16:28:53', 50),
(121, 1, '2019-11-25 16:30:53', 50),
(122, 1, '2019-11-28 16:07:07', 50),
(123, 1, '2019-11-28 16:09:07', 50),
(124, 1, '2019-11-28 16:09:57', 51),
(125, 1, '2019-11-28 16:11:57', 51),
(128, 1, '2019-11-28 17:06:17', 51),
(129, 1, '2019-11-28 17:13:54', 50),
(130, 1, '2019-11-28 17:15:54', 50),
(131, 1, '2019-11-28 17:20:57', 53),
(132, 1, '2019-11-28 17:22:57', 53),
(133, 1, '2019-11-28 17:23:38', 51),
(134, 1, '2019-11-28 17:24:57', 53),
(135, 1, '2019-11-28 17:25:38', 51),
(136, 1, '2019-11-28 17:34:33', 53),
(137, 1, '2019-11-28 17:36:51', 53),
(138, 1, '2019-11-28 17:38:51', 53),
(139, 1, '2019-11-28 17:41:29', 53),
(140, 1, '2019-11-28 17:43:29', 53),
(141, 1, '2019-11-28 17:50:35', 51),
(142, 1, '2019-11-28 17:52:35', 51),
(143, 1, '2019-11-28 18:03:20', 51),
(144, 1, '2019-11-28 18:05:20', 51),
(145, 1, '2019-11-29 11:59:23', 50),
(146, 1, '2019-11-29 12:01:23', 50),
(147, 1, '2019-11-29 15:45:34', 51),
(148, 1, '2019-11-29 15:47:34', 51),
(149, 1, '2019-11-29 15:50:52', 51),
(150, 1, '2019-11-29 15:52:52', 51),
(151, 1, '2019-11-29 17:39:03', 50),
(152, 1, '2019-11-29 17:41:03', 50),
(153, 1, '2019-11-29 17:44:32', 50),
(154, 1, '2019-11-29 17:46:32', 50),
(155, 1, '2019-12-01 15:03:19', 52),
(156, 2, '2019-12-02 15:13:05', 53),
(157, 2, '2019-12-02 15:15:05', 53),
(158, 2, '2019-12-02 17:12:09', 50),
(159, 2, '2019-12-02 17:14:09', 50),
(160, 2, '2019-12-02 17:25:57', 50),
(161, 2, '2019-12-02 17:27:57', 50),
(162, 2, '2019-12-02 17:59:20', 50),
(163, 1, '2019-12-02 19:27:44', 51),
(164, 1, '2019-12-02 19:29:44', 51);

-- --------------------------------------------------------

--
-- 資料表結構 `peoplehp`
--

CREATE TABLE `peoplehp` (
  `peoplehp_sid` int(11) NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `hp` int(11) DEFAULT NULL,
  `mp` int(11) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `upgrade_point` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `peoplehp`
--

INSERT INTO `peoplehp` (`peoplehp_sid`, `customer_information`, `hp`, `mp`, `skill`, `upgrade_point`) VALUES
(1, 1, 2900, 1500, '[\"生活規律\", \"低鹽飲食\"]', 3);

-- --------------------------------------------------------

--
-- 資料表結構 `pm_event`
--

CREATE TABLE `pm_event` (
  `pm_id` int(11) UNSIGNED NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `discount` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `pm_event`
--

INSERT INTO `pm_event` (`pm_id`, `event_name`, `discount`) VALUES
(50, 'A', '1000'),
(51, 'B', '500'),
(52, 'C', '300'),
(53, 'D', '100');

-- --------------------------------------------------------

--
-- 資料表結構 `post_details`
--

CREATE TABLE `post_details` (
  `post_details_id` int(11) NOT NULL,
  `main_order` int(10) UNSIGNED NOT NULL,
  `address_change` int(10) UNSIGNED NOT NULL,
  `buyer` varchar(255) CHARACTER SET utf8 NOT NULL,
  `buyer_phone` int(11) DEFAULT NULL,
  `buyer_mobile` int(11) DEFAULT NULL,
  `buyer_email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `buyer_address` varchar(255) CHARACTER SET utf8 NOT NULL,
  `receiver` varchar(255) CHARACTER SET utf8 NOT NULL,
  `receiver_phone` int(11) DEFAULT NULL,
  `receiver_mobile` int(11) DEFAULT NULL,
  `receiver_email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `get_time` varchar(255) CHARACTER SET utf8 NOT NULL,
  `get_method` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `pay_method` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `post_details`
--

INSERT INTO `post_details` (`post_details_id`, `main_order`, `address_change`, `buyer`, `buyer_phone`, `buyer_mobile`, `buyer_email`, `buyer_address`, `receiver`, `receiver_phone`, `receiver_mobile`, `receiver_email`, `get_time`, `get_method`, `pay_method`) VALUES
(5, 110, 1, '徐老師', 546654654, 464564, 'oajlajal54564', '行天宮', '徐老師', 546654654, 464564, 'oajlajal54564', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(6, 111, 1, '徐老師', 546654654, 464564, 'oajlajal54564', '行天宮', '徐老師', 546654654, 464564, 'oajlajal54564', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(7, 112, 1, '莊博宇', 82857400, 931683998, 'paulpaul456@yahoo.com.tw', '蘆洲光華路70巷70號', '莊博宇', 82857400, 931683998, 'paulpaul456@yahoo.com.tw', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(8, 116, 1, '莊博宇', 82857400, 931683998, 'paulpaul456@yahoo.com.tw', '蘆洲光華路70巷70號', '莊博宇', 82857400, 931683998, 'paulpaul456@yahoo.com.tw', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(9, 117, 1, '莊博宇', 82857400, 931683998, 'paulpaul456@yahoo.com.tw', '蘆洲光華路70巷70號', '莊博宇', 82857400, 931683998, 'paulpaul456@yahoo.com.tw', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(10, 118, 1, '莊博宇', 82857400, 931683998, '43', '蘆洲光華路70巷70號', '莊博宇', 82857400, 931683998, '43', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(11, 119, 1, '莊博宇', 82857400, 931683998, '43', '蘆洲光華路70巷70號', '莊博宇', 82857400, 931683998, '43', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(12, 122, 1, '彭于晏', 12313132, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 12313132, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(13, 123, 1, '彭于晏', 12313132, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 12313132, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(14, 124, 1, '彭于晏', 543543, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 543543, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(15, 125, 1, '彭于晏', 543543, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 543543, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(16, 129, 1, '彭于晏', 7414, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 7414, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(17, 130, 1, '彭于晏', 7414, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 7414, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(18, 131, 1, '彭于晏', 787, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 787, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(19, 132, 1, '彭于晏', 787, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 787, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(20, 133, 1, '彭于晏', 787575, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 787575, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(21, 134, 1, '彭于晏', 787, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 787, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(22, 135, 1, '彭于晏', 787575, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 787575, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(23, 136, 1, '彭于晏', 7875756, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 7875756, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(24, 137, 1, '彭于晏', 78757567, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 78757567, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(25, 138, 1, '彭于晏', 78757567, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 78757567, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(26, 139, 1, '彭于晏', 52, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 52, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(27, 140, 1, '彭于晏', 52, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 52, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(28, 141, 1, '彭于晏', 5556, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 5556, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(29, 142, 1, '彭于晏', 5556, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 5556, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(30, 143, 1, '彭于晏', 82857400, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 82857400, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(31, 144, 1, '彭于晏', 82857400, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 82857400, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(32, 145, 1, '彭于晏', 123, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 123, 918168111, '123@gmail.com', '晚間時段(PM13:00~PM19:00)', '宅配到府', '線上刷卡'),
(33, 146, 1, '彭于晏', 123, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 123, 918168111, '123@gmail.com', '晚間時段(PM13:00~PM19:00)', '宅配到府', '線上刷卡'),
(34, 147, 1, '彭于晏', 82857400, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 82857400, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(35, 148, 1, '彭于晏', 82857400, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 82857400, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(36, 149, 1, '彭于晏', 29423966, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 29423966, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(37, 150, 1, '彭于晏', 29423966, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 29423966, 918168111, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(38, 151, 1, '彭于晏', 787, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 787, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(39, 152, 1, '彭于晏', 787, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 787, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '宅配到府', '線上刷卡'),
(40, 153, 1, '彭于晏', 82857400, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 82857400, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(41, 154, 1, '彭于晏', 82857400, 918168111, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 82857400, 918168111, '123@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(42, 155, 1, '彭于晏', 777, 918168168, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 777, 918168168, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(43, 156, 1, '小美2', 54343, 934567890, '456@gmail.com', '台北市中山區中山里中山路999號', '小美2', 54343, 934567890, '456@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(44, 157, 1, '小美2', 54343, 934567890, '456@gmail.com', '台北市中山區中山里中山路999號', '小美2', 54343, 934567890, '456@gmail.com', '早間時段(AM08:00~PM13:00) ', '超商取貨', '線上刷卡'),
(45, 160, 1, '小美2', 29423966, 934567890, '456@gmail.com', '台北市中山區中山里中山路999號', '小美2', 29423966, 934567890, '456@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(46, 161, 1, '小美2', 29423966, 934567890, '456@gmail.com', '台北市中山區中山里中山路999號', '小美2', 29423966, 934567890, '456@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(47, 162, 1, '小美2', 29456666, 934567890, '456@gmail.com', '台北市中山區中山里中山路999號', '小美2', 29456666, 934567890, '456@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(48, 163, 1, '彭于晏', 29495959, 918168168, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 29495959, 918168168, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡'),
(49, 164, 1, '彭于晏', 29495959, 918168168, '123@gmail.com', '台北市大安區大安路大安里168號', '彭于晏', 29495959, 918168168, '123@gmail.com', '不限時段', '宅配到府', '線上刷卡');

-- --------------------------------------------------------

--
-- 資料表結構 `product_approve`
--

CREATE TABLE `product_approve` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_approve`
--

INSERT INTO `product_approve` (`sid`, `name`, `pic`) VALUES
(1, '財團法人國際美育自然生態基金會(MOA)', ''),
(2, '台灣省有機農業生產協會(TOPA)', '');

-- --------------------------------------------------------

--
-- 資料表結構 `product_category`
--

CREATE TABLE `product_category` (
  `category_sid` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_sid` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_category`
--

INSERT INTO `product_category` (`category_sid`, `name`, `parent_sid`) VALUES
(1, '在地生鮮', 0),
(2, '手作好味', 0),
(3, '精心禮品', 0),
(4, '全榖雜糧類', 1),
(5, '全榖根莖類', 1),
(6, '水果', 1),
(7, '蔬菜', 1),
(8, '蛋', 1),
(9, '肉', 1),
(10, '豆', 1),
(11, '菇', 1),
(12, '海鮮', 1),
(13, '調味用品', 2),
(14, '油品', 2),
(15, '飲品', 2),
(16, '果醬', 2),
(17, '醃漬品', 2),
(18, '米粉/麵條', 2),
(19, '南北雜貨', 3),
(20, '禮盒', 3);

-- --------------------------------------------------------

--
-- 資料表結構 `product_class`
--

CREATE TABLE `product_class` (
  `class_sid` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_sid` int(11) NOT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_class`
--

INSERT INTO `product_class` (`class_sid`, `name`, `category_sid`, `picture`) VALUES
(1, '白米', 4, NULL),
(2, '糙米', 4, NULL),
(3, '紫米', 4, NULL),
(4, '糯米', 4, NULL),
(5, '小米', 4, '12345'),
(6, '胚芽', 4, NULL),
(7, '紅藜', 4, NULL),
(8, '燕麥', 4, NULL),
(9, '薏仁', 4, NULL),
(10, '白蘿蔔', 5, NULL),
(11, '紅蘿蔔', 5, NULL),
(12, '南瓜', 5, NULL),
(13, '山藥', 5, 'hihihi.jpg'),
(14, '蓮藕', 5, NULL),
(15, '芋頭', 5, NULL),
(16, '竹筍', 5, NULL),
(17, '蘆筍', 5, NULL),
(18, '牛蒡', 5, NULL),
(19, '地瓜', 5, NULL),
(20, '香蕉', 6, NULL),
(21, '蘋果', 6, NULL),
(22, '柑橘', 6, NULL),
(23, '芭樂', 6, NULL),
(24, '芒果', 6, NULL),
(25, '火龍果', 6, NULL),
(26, '西瓜', 6, NULL),
(27, '甜瓜', 6, NULL),
(28, '葡萄', 6, NULL),
(29, '蓮霧', 6, NULL),
(30, '鳳梨', 6, NULL),
(31, '莓果', 6, NULL),
(32, '水梨', 6, NULL),
(33, '桃李', 6, NULL),
(34, '娃娃菜', 7, NULL),
(35, '芥藍', 7, NULL),
(36, '花椰菜', 7, NULL),
(37, '黃瓜', 7, NULL),
(38, '高麗菜', 7, NULL),
(39, '小白菜', 7, NULL),
(40, '萵苣', 7, NULL),
(41, '番茄', 7, NULL),
(42, '菠菜', 7, NULL),
(43, '茄子', 7, NULL),
(44, '苦瓜', 7, NULL),
(45, '絲瓜', 7, NULL),
(46, '洋蔥', 7, NULL),
(47, '甜椒', 7, NULL),
(48, '甜菜', 7, NULL),
(49, '雞蛋', 8, NULL),
(50, '鴨蛋', 8, NULL),
(51, '牛肉', 9, NULL),
(52, '豬肉', 9, NULL),
(53, '羊肉', 9, NULL),
(54, '雞肉', 9, NULL),
(55, '鴨肉', 9, 'duck.png'),
(56, '鵝肉', 9, NULL),
(57, '黃豆', 10, NULL),
(58, '綠豆', 10, NULL),
(59, '紅豆', 10, NULL),
(60, '花生', 10, NULL),
(61, '堅果', 10, NULL),
(62, '四季豆', 10, NULL),
(63, '豌豆', 10, NULL),
(64, '毛豆', 10, NULL),
(65, '豆芽', 10, NULL),
(66, '木耳', 11, NULL),
(67, '香菇', 11, NULL),
(68, '猴頭菇', 11, NULL),
(69, '杏鮑菇', 11, NULL),
(70, '金針菇', 11, NULL),
(71, '秀珍菇', 11, NULL),
(72, '珊瑚菇', 11, NULL),
(73, '蛤蠣', 12, NULL),
(74, '牡蠣', 12, NULL),
(75, '蝦仁', 12, NULL),
(76, '小卷', 12, NULL),
(77, '烏賊', 12, NULL),
(78, '鮭魚', 12, 'salmon.png'),
(79, '鯛魚', 12, NULL),
(80, '鯖魚', 12, NULL),
(81, '虱目魚', 12, NULL),
(82, '龍蝦', 12, NULL),
(83, '螃蟹', 12, NULL),
(84, '醋', 13, NULL),
(85, '醬油', 13, NULL),
(86, '鹽', 13, NULL),
(87, '糖', 13, NULL),
(88, '乾粉香料', 13, NULL),
(89, '調味醬', 13, NULL),
(90, '植物油', 14, NULL),
(91, '混合油', 14, NULL),
(92, '動物油', 14, NULL),
(93, '茶飲', 15, NULL),
(94, '果醋', 15, NULL),
(95, '果汁', 15, NULL),
(96, '水果醬', 16, NULL),
(97, '堅果醬', 16, NULL),
(98, '豆乳', 17, NULL),
(99, '漬菜', 17, NULL),
(100, '醃瓜', 17, NULL),
(101, '肉品', 17, NULL),
(102, '米粉', 18, NULL),
(103, '義大利麵', 18, NULL),
(104, '油麵/拉麵', 18, NULL),
(105, '蕎麥麵/烏龍麵', 18, NULL),
(106, '蒟蒻麵', 18, NULL),
(107, '冬粉', 18, NULL),
(108, '麵線', 18, NULL),
(109, '乾貨', 19, NULL),
(110, '粉粒', 19, NULL),
(111, '鮮貨', 20, NULL),
(112, '乾貨', 20, NULL),
(113, '干貝', 12, NULL),
(114, '蓮子', 4, NULL),
(115, '黑豆', 10, NULL),
(116, '玉米', 5, NULL),
(117, '鮑魚', 12, NULL),
(118, '章魚', 12, NULL),
(119, '蘑菇', 11, NULL),
(122, '馬鈴薯', 5, NULL),
(123, '牛肝菌菇', 11, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` smallint(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '餐廳名',
  `intro` varchar(255) DEFAULT NULL COMMENT '介紹',
  `mobile` varchar(255) NOT NULL COMMENT '電話',
  `address` varchar(255) NOT NULL COMMENT '地址',
  `lat` varchar(255) NOT NULL COMMENT '緯度',
  `lng` varchar(255) NOT NULL COMMENT '經度',
  `maplocation` varchar(255) NOT NULL COMMENT '經緯度',
  `holiday` int(10) NOT NULL COMMENT '公休日',
  `businesstime` varchar(255) NOT NULL COMMENT '營業時段',
  `vegetarian` varchar(255) NOT NULL COMMENT '葷素食',
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cook` int(255) NOT NULL COMMENT '代客煮服務費',
  `cooktime` int(255) NOT NULL COMMENT '代客煮日',
  `cookhour` varchar(255) NOT NULL COMMENT '代客煮時段',
  `limit_person` int(11) DEFAULT NULL COMMENT '內用限制人數',
  `cooktype` varchar(255) DEFAULT NULL COMMENT '代客煮形式',
  `pct` int(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `my_file` varchar(255) NOT NULL,
  `setoption` varchar(255) NOT NULL,
  `foodclass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `restaurant`
--

INSERT INTO `restaurant` (`restaurant_id`, `name`, `intro`, `mobile`, `address`, `lat`, `lng`, `maplocation`, `holiday`, `businesstime`, `vegetarian`, `user`, `password`, `cook`, `cooktime`, `cookhour`, `limit_person`, `cooktype`, `pct`, `website`, `my_file`, `setoption`, `foodclass`) VALUES
(1, '義麵屋', '平價美食', '02 2351 6268', '台北市松山區南京東路五段250巷', '25.0507301', '121.5656958', '{\"lat\":25.0507301,\"lng\":121.5656958}', 3, '11:30~21:30', '都有', 'restaurant01', 'restaurant01', 500, 5, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 500, 'http://www.lapasta.com.tw/', 'dca5ef4ed0f537d3fb8eb5d849df6fbcecfefcad.jpg', '[\"湯\"]', '西式'),
(2, '鼎泰豐', '台灣必吃，絕頂美味', '02 2784 7088', '台北市大安區信義路二段194號', '25.033483', '121.530112', '{\"lat\":25.033483,\"lng\":121.530112}', 3, '11:30~21:30', '素', 'restaurant02', 'restaurant02', 300, 6, '[\"11:00~14:00\",\"14:00~17:00\"]', NULL, '外送', 200, 'https://www.dintaifung.com.tw/', 'e90954c6009a7e4a01fd4d70891212e984d34941.jpg', '[\"飲料\"]', '中式'),
(3, '狐狸野餐', '在地食材，美味家常', '02 2509 8020', '台北市中山區龍江路281巷22號', '25.059744', '121.5418396', '{\"lat\":25.059744,\"lng\":121.5418396}', 3, '11:30~21:30', '葷', 'restaurant03', 'restaurant03', 300, 0, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 200, 'https://www.facebook.com/pg/HuLiYeCan/photos/?ref=page_internal', '666bc3526f7e9ab01f03f0c8f9bb465bdec666aa.jpg', '[\"飲料\"]', '中式'),
(4, '營養師的光合厨房', '帶您品味食物的真性情', '02 2701 5897', '台北市大安區和平東路二段311巷34弄5號1樓', '25.0257385', '121.5449255', '{\"lat\":25.0257385,\"lng\":121.5449255}', 1, '8:30~20:30', '都有', 'restaurant04', 'restaurant04', 500, 6, '[\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 500, 'https://www.facebook.com/SupervitTW', 'fe525004d2ebe55a41d18b48bb2e49efdc8b7420.jpg', '[\"湯\",\"甜點\"]', '西式'),
(5, '小農鍋物', '無毒小農蔬果與安心肉品', '02 2722 1883', '台北市大安區敦化南路一段190巷40號', '25.042577', '121.5469727', '{\"lat\":25.042577,\"lng\":121.5469727}', 3, '11:30~21:30', '葷', 'restaurant05', 'restaurant05', 800, 0, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 800, 'https://www.facebook.com/farmerstabletw/', 'dd1e161d5f5211ad6dff5afd7ccb85bf82506419.jpg', '[\"甜點\"]', '中式'),
(6, '呷米蔬食', '無毒食材，直送餐桌', '02 2331 9662', '台北市中正區衡陽路9號', '25.042415', '121.513701', '{\"lat\":25.042415,\"lng\":121.513701}', 4, '8:30~20:30', '素', 'restaurant06', 'restaurant06', 300, 6, '[\"11:00~14:00\",\"14:00~17:00\"]', NULL, '內用', 200, 'https://www.facebook.com/Ricerevolutioneco', 'd56a3e19c5cb052ca91e84a0adc6c3026b37cae3.jpg', '[\"飲料\"]', '西式'),
(7, '齊民市集', '健康清爽無負擔', '02 2327 9824', '台北市大安區信義路二段158號', '25.033634', '121.528957', '{\"lat\":25.033634,\"lng\":121.528957}', 3, '11:30~21:30', '葷', 'restaurant07', 'restaurant07', 800, 5, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '外送', 800, 'https://www.facebook.com/qiminmarket/', 'aee7ce213d974c2b4d14d7e00a03477b0863339d.jpg', '[\"飲料\"]', '西式'),
(8, '良食究好', NULL, '02 3762 1111', '台北市八德路四段138號10F', '25.0481184', '121.5618219', '{\"lat\":25.0481184,\"lng\":121.5618219}', 3, '11:30~21:30', '素', 'restaurant08', 'restaurant08', 500, 0, '[\"14:00~17:00\",\"17:00~20:00\"]', NULL, '外送', 200, '', 'c2e1966ae2f7ba086fdc1fcc2229601e1320a9de.jpg', '[\"甜點\"]', '中式'),
(9, '一號糧倉', NULL, '02 2775 1689', '台北市八德路二段346巷3弄2號', '25.047459', '121.545057', '{\"lat\":25.047459,\"lng\":121.545057}', 3, '11:30~21:30', '葷', 'restaurant09', 'restaurant09', 300, 6, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 200, 'https://no1foodtheater.com.tw/content/Index.aspx', 'e909060f69565c7ff28e8f8fb2376bf4ba044dfa.jpg', '[\"甜點\"]', '中式'),
(10, '愛新覺羅鮮採嚴煮', NULL, '02 2752-0586', '台北市市民大道四段104號', '25.044398', '121.550331', '{\"lat\":25.044398,\"lng\":121.550331}', 3, '11:30~21:30', '葷', 'restaurant10', 'restaurant10', 800, 6, '[\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 800, 'https://www.emperors.com.tw/', 'dff98031d8d4e547334436f33b3c106013c1b290.jpg', '[\"湯\"]', '西式'),
(11, 'freshOLA輕食部', NULL, '02 2778 1160', '台北市大安區仁愛路四段151巷36號B1', '25.040539', '121.551541', '{\"lat\":25.040539,\"lng\":121.551541}', 0, '9:00~21:00', '都有', 'restaurant11', 'restaurant11', 300, 6, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 200, 'http://blog.udn.com/Florrie0607/15104306', '9ceb1322618d3b27cf9c84f2306dfacc48146072.jpg', '[\"湯\"]', '西式'),
(12, '仁里居', NULL, '02 2706 2522', '台北市大安區建國南路二段151巷16號', '25.02867', '121.538584', '{\"lat\":25.02867,\"lng\":121.538584}', 3, '11:30~21:30', '都有', 'restaurant12', 'restaurant12', 500, 5, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '外送', 500, 'http://blog.udn.com/Florrie0607/15104306', 'f40f46ce6e8d053bd39e4218fe3fde0e600b63d4.jpg', '[\"湯\"]', '中式'),
(13, '二本餐廳', NULL, '02 8773 7033', '台北市大安區忠孝東路四段101巷27號', '25.0429632', '121.548166', '{\"lat\":25.0429632,\"lng\":121.548166}', 3, '11:30~21:30', '素', 'restaurant13', 'restaurant13', 500, 0, '[\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 500, 'https://www.facebook.com/herban.taipei/', '49f3dd93a3e468b3cd4b094df615793e7cc651a4.jpg', '[\"飲料\"]', '中式'),
(14, '日光大道富錦廚房', NULL, '02 2767 6211', '台北市松山區富錦街421號', '25.0609339', '121.5610801', '{\"lat\":25.0609339,\"lng\":121.5610801}', 3, '11:30~21:30', '素', 'restaurant14', 'restaurant14', 500, 5, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 500, 'https://www.walkerland.com.tw/article/view/192644?page=full', 'd542d7e06f0f0de675053e686b5bb1d30e642aa1.jpg', '[\"湯\",\"甜點\"]', '西式'),
(15, '彈彈屋火鍋工坊', NULL, '02 2351 6268', '新北市淡水區馬偕街2號', '25.1717019', '121.4386004', '{\"lat\":25.1717019,\"lng\":121.4386004}', 3, '11:30~21:30', '葷', 'restaurant15', 'restaurant15', 500, 6, '[\"11:00~14:00\",\"14:00~17:00\"]', NULL, '內用', 800, 'https://www.facebook.com/dandan.bomb.house/', '8eaa182e40790ba6a5a3e7201bee45fe40e96987.jpg', '[\"甜點\",\"飲料\"]', '中式'),
(16, '藕根香', NULL, '02 2721 0832', '台北市仁愛路4段27巷4弄16號 ', '25.0385413', '121.5446139', '{\"lat\":25.0385413,\"lng\":121.5446139}', 3, '11:30~21:30', '都有', 'restaurant16', 'restaurant16', 300, 5, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 200, 'https://yu0226.pixnet.net/blog/post/82797923-%E8%97%95%E6%A0%B9%E9%A6%99%E9%A3%9F%E8%A8%98....%E5%B7%B2%E6%AD%87%E6%A5%AD', 'b8c9a8e51b732c3ebf2a6ecaea765e802169176f.jpg', '[\"湯\",\"甜點\",\"飲料\"]', '中式'),
(17, '農人餐桌親子餐廳', NULL, '02 2322 3716', '台北市中正區重慶南路二段51號', '25.031284', '121.5148909', '{\"lat\":25.031284,\"lng\":121.5148909}', 3, '11:30~21:30', '葷', 'restaurant17', 'restaurant17', 300, 6, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 200, 'https://inline.app/booking/-LOEHQ13SpdTwu988kFy:inline-live-2a466/-LOEHQ236YEKRtVWrJq6?language=zh-tw', 'ffdf1b64aab0e00e41427e551be45e73f42873d4.jpg', '[\"湯\",\"甜點\"]', '西式'),
(18, '璞食Cucina Pura餐廳', NULL, '02 8771 8198', '台北市大安區忠孝東路四段216巷33弄15號1樓', '25.0395433', '121.5537799', '{\"lat\":25.0395433,\"lng\":121.5537799}', 3, '11:30~21:30', '都有', 'restaurant18', 'restaurant18', 800, 5, '[\"14:00~17:00\",\"17:00~20:00\"]', NULL, '外送', 500, 'https://www.facebook.com/cucinapura/', '118f57e1bcb44c25bfb8a92519115dea25a5abc8.jpg', '[\"甜點\",\"飲料\"]', '西式'),
(19, '御蓮齋', NULL, '02 2761 1259', '台北市松山區南京東路五段188號', '25.0510235', '121.563625', '{\"lat\":25.0510235,\"lng\":121.563625}', 3, '11:30~21:30', '素', 'restaurant19', 'restaurant19', 800, 6, '[\"11:00~14:00\",\"14:00~17:00\"]', NULL, '內用', 800, 'http://www.regal-lotus.com/', '24632034774353f5e149d10c0e4816ee721ec592.jpg', '[\"飲料\"]', '中式'),
(20, '晉家門', NULL, '02 2629 0018', '新北市淡水區中山北路一段257號', '25.1807803', '121.4442162', '{\"lat\":25.1807803,\"lng\":121.4442162}', 3, '11:30~21:30', '葷', 'restaurant21', 'restaurant21', 800, 0, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 800, 'http://thofood.com.69-16-242-113.seagull.potia.net/', 'ab474167759c7b622dcc881da266bac44bdd20c8.png', '[\"甜點\"]', '中式'),
(21, '好菜Kuisine', NULL, '04 2305 2933', '台中市西區模範街24巷1號', '24.1487515', '120.6668479', '{\"lat\":24.1487515,\"lng\":120.6668479}', 3, '11:30~21:30', '葷', 'restaurant22', 'restaurant22', 500, 6, '[\"11:00~14:00\",\"14:00~17:00\"]', NULL, '內用', 500, 'https://www.facebook.com/pg/HuLiYeCan/photos/?ref=page_internal', '4375851a1de3e246aa6325901994b72fc524c693.jpg', '[\"湯\",\"甜點\"]', '西式'),
(22, '自在森林', NULL, '04 2473 8262', '台中市西區東興路三段2號', '24.145678', '120.653357', '{\"lat\":24.145678,\"lng\":120.653357}', 3, '10:30~00:00', '都有', 'restaurant23', 'restaurant23', 300, 0, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 200, 'https://www.facebook.com/SupervitTW', '7b4b660abdcba763646605e31b354f3ad8f24ba6.jpg', '[\"甜點\",\"飲料\"]', '西式'),
(24, '明水禪悅', NULL, '02 8509 5828', '台北市中山區明水路575號', '25.0798305', '121.5519134', '{\"lat\":25.0798305,\"lng\":121.5519134}', 3, '11:30~21:30', '葷', 'restaurant20', 'restaurant20', 500, 6, '[\"11:00~14:00\",\"14:00~17:00\",\"17:00~20:00\"]', NULL, '內用', 500, 'https://www.facebook.com/pg/evelynveganlife/photos/?tab=album&album_id=464946686878522', '9b9278a1694eb684f037e0b89dc5bc77777db86e.jpg', '[\"湯\"]', '中式');

-- --------------------------------------------------------

--
-- 資料表結構 `res_comment`
--

CREATE TABLE `res_comment` (
  `res_comment_id` int(11) UNSIGNED NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `restaurant` smallint(5) UNSIGNED NOT NULL,
  `stars` int(10) UNSIGNED NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `p_like` int(11) DEFAULT NULL,
  `p_dislike` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `res_comment`
--

INSERT INTO `res_comment` (`res_comment_id`, `customer_information`, `restaurant`, `stars`, `comment`, `create_at`, `p_like`, `p_dislike`) VALUES
(63, 1, 1, 5, '好好吃', '2019-12-01 15:44:27', 1, 0),
(64, 1, 1, 5, '真好吃', '2019-12-01 15:44:33', 1, 1),
(65, 1, 1, 5, '真好吃', '2019-12-01 15:44:37', 0, 0),
(66, 1, 1, 5, '怎麼那麼好吃', '2019-12-01 16:00:17', 1, 0),
(67, 1, 2, 5, '一定要吃', '2019-12-01 16:00:36', 0, 0),
(68, 1, 1, 5, '我們全家都愛吃', '2019-12-01 16:01:35', 1, 0),
(69, 1, 1, 5, '我們全家都愛吃', '2019-12-01 16:01:46', 1, 0),
(70, 1, 1, 5, '我不愛吃', '2019-12-01 16:02:32', 1, 0),
(71, 1, 1, 5, '好想吃吃看', '2019-12-01 16:12:40', 0, 0),
(72, 1, 1, 5, '誰想吃', '2019-12-01 16:13:33', NULL, NULL),
(73, 1, 2, 5, '很多觀光客', '2019-12-01 16:14:02', NULL, NULL),
(74, 1, 2, 5, '好難吃', '2019-12-01 16:15:08', NULL, NULL),
(75, 1, 2, 5, '我爸很懷念', '2019-12-01 16:16:37', 0, 0),
(76, 1, 2, 5, '很好吃嗎', '2019-12-01 16:18:59', NULL, NULL),
(77, 1, 2, 5, '嚕嚕', '2019-12-01 16:19:10', NULL, NULL),
(78, 1, 2, 5, '拉拉', '2019-12-01 16:20:04', NULL, NULL),
(79, 1, 2, 5, '嘿嘿', '2019-12-01 16:20:10', NULL, NULL),
(80, 2, 1, 5, '好好吃喔', '2019-12-02 15:28:06', NULL, NULL),
(81, 2, 1, 5, '我好想吃', '2019-12-02 17:03:14', NULL, NULL),
(82, 2, 1, 0, '我們全家都吃過', '2019-12-02 20:14:14', NULL, NULL),
(83, 2, 1, 4, '我每天吃', '2019-12-02 20:14:28', NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `tag`
--

CREATE TABLE `tag` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `tag`
--

INSERT INTO `tag` (`sid`, `name`) VALUES
(1, '有機'),
(2, '全素'),
(3, '蛋奶素'),
(4, '無麩質'),
(5, '加工品'),
(6, '當季限定'),
(7, '限量'),
(8, 'NG品'),
(9, '獲獎'),
(10, '紅燒'),
(11, '清蒸'),
(12, '涼拌'),
(13, '酥炸'),
(14, '熱炒'),
(15, '白醬'),
(16, '紅醬'),
(17, '青醬'),
(18, '香蒜'),
(19, '起司');

-- --------------------------------------------------------

--
-- 資料表結構 `tag_dinner`
--

CREATE TABLE `tag_dinner` (
  `sid` int(11) NOT NULL,
  `dinner_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `tag_dinner`
--

INSERT INTO `tag_dinner` (`sid`, `dinner_id`, `tag_id`) VALUES
(1, 3, 9),
(3, 3, 6),
(7, 97, 9),
(11, 122, 9),
(13, 129, 9),
(14, 123, 6);

-- --------------------------------------------------------

--
-- 資料表結構 `who_dn_goods_comment`
--

CREATE TABLE `who_dn_goods_comment` (
  `who_dn_goods_comment_id` int(11) NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `dn_goods_comment` int(10) UNSIGNED NOT NULL,
  `p_like` int(11) DEFAULT NULL,
  `p_dislike` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `who_dn_goods_comment`
--

INSERT INTO `who_dn_goods_comment` (`who_dn_goods_comment_id`, `customer_information`, `dn_goods_comment`, `p_like`, `p_dislike`) VALUES
(1, 1, 1, 1, NULL),
(2, 2, 1, NULL, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `who_fm_goods_comment`
--

CREATE TABLE `who_fm_goods_comment` (
  `who_fm_goods_comment_id` int(11) NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `fm_goods_comment` int(10) UNSIGNED NOT NULL,
  `p_like` int(1) DEFAULT NULL,
  `p_dislike` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- 傾印資料表的資料 `who_fm_goods_comment`
--

INSERT INTO `who_fm_goods_comment` (`who_fm_goods_comment_id`, `customer_information`, `fm_goods_comment`, `p_like`, `p_dislike`) VALUES
(1, 1, 10, 1, NULL),
(2, 2, 10, 1, NULL),
(3, 3, 9, 1, NULL),
(4, 3, 10, NULL, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `who_res_comment`
--

CREATE TABLE `who_res_comment` (
  `who_res_comment_id` int(11) NOT NULL,
  `customer_information` int(10) UNSIGNED NOT NULL,
  `res_comment` int(10) UNSIGNED NOT NULL,
  `p_like` int(11) DEFAULT NULL,
  `p_dislike` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `who_res_comment`
--

INSERT INTO `who_res_comment` (`who_res_comment_id`, `customer_information`, `res_comment`, `p_like`, `p_dislike`) VALUES
(91, 1, 63, 1, NULL),
(92, 1, 64, 1, NULL),
(101, 2, 64, NULL, 1),
(102, 2, 68, 1, NULL),
(103, 2, 66, 1, NULL),
(105, 2, 70, 1, NULL),
(107, 2, 69, 1, NULL);

-- --------------------------------------------------------

--
-- 檢視表結構 `keysearch`
--
DROP TABLE IF EXISTS `keysearch`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `keysearch`  AS  select `course`.`course_name` AS `name`,'course' AS `type` from `course` union select `farmer_product`.`name` AS `name`,'farmerProduct' AS `farmerProduct` from `farmer_product` union select `dinner_list`.`name` AS `name`,'dinnerList' AS `dinnerList` from `dinner_list` union select `restaurant`.`name` AS `name`,'restaurant' AS `restaurant` from `restaurant` ;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`sid`,`username`);

--
-- 資料表索引 `address_change`
--
ALTER TABLE `address_change`
  ADD PRIMARY KEY (`address_change_id`,`customer_information`),
  ADD KEY `Constr_address_change_customer_information_fk` (`customer_information`);

--
-- 資料表索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 資料表索引 `class_room`
--
ALTER TABLE `class_room`
  ADD PRIMARY KEY (`room_sid`),
  ADD KEY `country_sid` (`country_sid`);

--
-- 資料表索引 `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_sid`);

--
-- 資料表索引 `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- 資料表索引 `course_cart`
--
ALTER TABLE `course_cart`
  ADD PRIMARY KEY (`course_cart_id`,`main_cart`,`course`,`class_room`),
  ADD KEY `Constr_course_cart_main_cart_fk` (`main_cart`),
  ADD KEY `Constr_course_cart_course_fk` (`course`),
  ADD KEY `Constr_course_cart_class_room_fk` (`class_room`);

--
-- 資料表索引 `course_comment`
--
ALTER TABLE `course_comment`
  ADD PRIMARY KEY (`course_comment_id`,`course`,`customer_information`),
  ADD KEY `Constr_course_comment_course_fk` (`course`),
  ADD KEY `Constr_course_comment_customer_information_fk` (`customer_information`);

--
-- 資料表索引 `course_order`
--
ALTER TABLE `course_order`
  ADD PRIMARY KEY (`course_order_id`,`main_order`,`course`),
  ADD KEY `Constr_course_order_main_order_fk` (`main_order`),
  ADD KEY `Constr_course_order_course_fk` (`course`);

--
-- 資料表索引 `customer_coupon`
--
ALTER TABLE `customer_coupon`
  ADD PRIMARY KEY (`customer_coupon_id`,`customer_information`,`pm_event`),
  ADD KEY `Constr_customer_coupon_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_customer_coupon_pm_event_fk` (`pm_event`);

--
-- 資料表索引 `customer_information`
--
ALTER TABLE `customer_information`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `password` (`password`);

--
-- 資料表索引 `dinnerproduct`
--
ALTER TABLE `dinnerproduct`
  ADD PRIMARY KEY (`sid`,`product_category`,`product_class`,`dinner_list`),
  ADD KEY `Constr_dinnerProduct_product_category_fk` (`product_category`),
  ADD KEY `Constr_dinnerProduct_product_class_fk` (`product_class`),
  ADD KEY `Constr_dinnerProduct_dinner_list_fk` (`dinner_list`);

--
-- 資料表索引 `dinner_list`
--
ALTER TABLE `dinner_list`
  ADD PRIMARY KEY (`dinner_id`),
  ADD KEY `combo` (`restaurant_id`),
  ADD KEY `restaurant_id` (`restaurant_id`),
  ADD KEY `restaurant_id_2` (`restaurant_id`);

--
-- 資料表索引 `dn_goods_cart`
--
ALTER TABLE `dn_goods_cart`
  ADD PRIMARY KEY (`dn_goods_cart_id`,`main_cart`,`dinner_list`,`product_class`,`farmer_product`),
  ADD KEY `Constr_dn_goods_cart_main_cart_fk` (`main_cart`),
  ADD KEY `Constr_dn_goods_cart_restaurant_fk` (`restaurant`),
  ADD KEY `Constr_dn_goods_cart_dinner_list_fk` (`dinner_list`),
  ADD KEY `Constr_dn_goods_cart_product_class_fk` (`product_class`),
  ADD KEY `Constr_dn_goods_cart_farmer_product_fk` (`farmer_product`);

--
-- 資料表索引 `dn_goods_comment`
--
ALTER TABLE `dn_goods_comment`
  ADD PRIMARY KEY (`dn_goods_comment_id`,`customer_information`,`dinner_list`),
  ADD KEY `Constr_dn_goods_comment_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_dn_goods_comment_dinner_list_fk` (`dinner_list`);

--
-- 資料表索引 `dn_goods_order`
--
ALTER TABLE `dn_goods_order`
  ADD PRIMARY KEY (`dn_goods_order_id`,`main_order`,`dinner_list`,`product_class`,`farmer_product`),
  ADD KEY `Constr_dn_goods_order_main_order_fk` (`main_order`),
  ADD KEY `Constr_dn_goods_order_dinner_list_fk` (`dinner_list`),
  ADD KEY `Constr_dn_goods_order_product_class_fk` (`product_class`),
  ADD KEY `Constr_dn_goods_order_farmer_product_fk` (`farmer_product`);

--
-- 資料表索引 `farmers`
--
ALTER TABLE `farmers`
  ADD PRIMARY KEY (`farmer_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 資料表索引 `farmer_product`
--
ALTER TABLE `farmer_product`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `fm_goods_cart`
--
ALTER TABLE `fm_goods_cart`
  ADD PRIMARY KEY (`fm_goods_cart_id`,`farmer_product`,`main_cart`),
  ADD KEY `Constr_fm_goods_cart_farmer_product_fk` (`farmer_product`),
  ADD KEY `Constr_fm_goods_cart_main_cart_fk` (`main_cart`);

--
-- 資料表索引 `fm_goods_comment`
--
ALTER TABLE `fm_goods_comment`
  ADD PRIMARY KEY (`fm_goods_comment_id`,`customer_information`,`farmer_product`),
  ADD KEY `Constr_fm_goods_comment_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_fm_goods_comment_farmer_product_fk` (`farmer_product`);

--
-- 資料表索引 `fm_goods_order`
--
ALTER TABLE `fm_goods_order`
  ADD PRIMARY KEY (`fm_goods_order_id`,`main_order`,`farmer_product`),
  ADD KEY `Constr_fm_goods_order_main_order_fk` (`main_order`),
  ADD KEY `Constr_fm_goods_order_farmer_product_fk` (`farmer_product`);

--
-- 資料表索引 `forum_categories`
--
ALTER TABLE `forum_categories`
  ADD PRIMARY KEY (`forum_id`);

--
-- 資料表索引 `forum_class`
--
ALTER TABLE `forum_class`
  ADD PRIMARY KEY (`forum_class_id`,`forum_class_desc`,`forum_type`);

--
-- 資料表索引 `forum_collection`
--
ALTER TABLE `forum_collection`
  ADD PRIMARY KEY (`customer_id`,`forum_id`,`collect_good_type`);

--
-- 資料表索引 `forum_message`
--
ALTER TABLE `forum_message`
  ADD PRIMARY KEY (`message_id`);

--
-- 資料表索引 `main_cart`
--
ALTER TABLE `main_cart`
  ADD PRIMARY KEY (`cart_id`,`customer_information`),
  ADD KEY `Constr_main_cart_customer_information_fk` (`customer_information`);

--
-- 資料表索引 `main_order`
--
ALTER TABLE `main_order`
  ADD PRIMARY KEY (`order_id`,`customer_information`,`pm_event`),
  ADD KEY `Constr_main_order_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_main_order_pm_event_fk` (`pm_event`);

--
-- 資料表索引 `peoplehp`
--
ALTER TABLE `peoplehp`
  ADD PRIMARY KEY (`peoplehp_sid`,`customer_information`),
  ADD KEY `Constr_peoplehp_sid_customer_information_fk` (`customer_information`);

--
-- 資料表索引 `pm_event`
--
ALTER TABLE `pm_event`
  ADD PRIMARY KEY (`pm_id`);

--
-- 資料表索引 `post_details`
--
ALTER TABLE `post_details`
  ADD PRIMARY KEY (`post_details_id`,`main_order`,`address_change`),
  ADD KEY `Constr_post_details_main_order_fk` (`main_order`),
  ADD KEY `Constr_post_details_address_change_fk` (`address_change`);

--
-- 資料表索引 `product_approve`
--
ALTER TABLE `product_approve`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`category_sid`);

--
-- 資料表索引 `product_class`
--
ALTER TABLE `product_class`
  ADD PRIMARY KEY (`class_sid`);

--
-- 資料表索引 `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurant_id`),
  ADD UNIQUE KEY `user` (`user`);

--
-- 資料表索引 `res_comment`
--
ALTER TABLE `res_comment`
  ADD PRIMARY KEY (`res_comment_id`,`customer_information`,`restaurant`),
  ADD KEY `Constr_res_comment_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_res_comment_dinner_list_fk` (`restaurant`);

--
-- 資料表索引 `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `tag_dinner`
--
ALTER TABLE `tag_dinner`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `who_dn_goods_comment`
--
ALTER TABLE `who_dn_goods_comment`
  ADD PRIMARY KEY (`who_dn_goods_comment_id`,`customer_information`,`dn_goods_comment`),
  ADD KEY `Constr_who_dn_goods_comment_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_who_dn_goods_comment_dn_goods_comment_fk` (`dn_goods_comment`);

--
-- 資料表索引 `who_fm_goods_comment`
--
ALTER TABLE `who_fm_goods_comment`
  ADD PRIMARY KEY (`who_fm_goods_comment_id`,`customer_information`,`fm_goods_comment`),
  ADD KEY `Constr_who_fm_goods_comment_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_who_fm_goods_comment_fm_goods_comment_fk` (`fm_goods_comment`);

--
-- 資料表索引 `who_res_comment`
--
ALTER TABLE `who_res_comment`
  ADD PRIMARY KEY (`who_res_comment_id`,`customer_information`,`res_comment`),
  ADD KEY `Constr_who_res_comment_id_customer_information_fk` (`customer_information`),
  ADD KEY `Constr_who_res_comment_id_res_comment_fk` (`res_comment`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `account`
--
ALTER TABLE `account`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `address_change`
--
ALTER TABLE `address_change`
  MODIFY `address_change_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_room`
--
ALTER TABLE `class_room`
  MODIFY `room_sid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `country`
--
ALTER TABLE `country`
  MODIFY `country_sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_cart`
--
ALTER TABLE `course_cart`
  MODIFY `course_cart_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_comment`
--
ALTER TABLE `course_comment`
  MODIFY `course_comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_order`
--
ALTER TABLE `course_order`
  MODIFY `course_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customer_coupon`
--
ALTER TABLE `customer_coupon`
  MODIFY `customer_coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customer_information`
--
ALTER TABLE `customer_information`
  MODIFY `customer_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dinnerproduct`
--
ALTER TABLE `dinnerproduct`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dinner_list`
--
ALTER TABLE `dinner_list`
  MODIFY `dinner_id` smallint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dn_goods_cart`
--
ALTER TABLE `dn_goods_cart`
  MODIFY `dn_goods_cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=163;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dn_goods_comment`
--
ALTER TABLE `dn_goods_comment`
  MODIFY `dn_goods_comment_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dn_goods_order`
--
ALTER TABLE `dn_goods_order`
  MODIFY `dn_goods_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `farmers`
--
ALTER TABLE `farmers`
  MODIFY `farmer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `farmer_product`
--
ALTER TABLE `farmer_product`
  MODIFY `sid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `fm_goods_cart`
--
ALTER TABLE `fm_goods_cart`
  MODIFY `fm_goods_cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=832;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `fm_goods_comment`
--
ALTER TABLE `fm_goods_comment`
  MODIFY `fm_goods_comment_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `fm_goods_order`
--
ALTER TABLE `fm_goods_order`
  MODIFY `fm_goods_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `forum_categories`
--
ALTER TABLE `forum_categories`
  MODIFY `forum_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `forum_message`
--
ALTER TABLE `forum_message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `main_cart`
--
ALTER TABLE `main_cart`
  MODIFY `cart_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `main_order`
--
ALTER TABLE `main_order`
  MODIFY `order_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `peoplehp`
--
ALTER TABLE `peoplehp`
  MODIFY `peoplehp_sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `pm_event`
--
ALTER TABLE `pm_event`
  MODIFY `pm_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post_details`
--
ALTER TABLE `post_details`
  MODIFY `post_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_approve`
--
ALTER TABLE `product_approve`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_category`
--
ALTER TABLE `product_category`
  MODIFY `category_sid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_class`
--
ALTER TABLE `product_class`
  MODIFY `class_sid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` smallint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `res_comment`
--
ALTER TABLE `res_comment`
  MODIFY `res_comment_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tag`
--
ALTER TABLE `tag`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tag_dinner`
--
ALTER TABLE `tag_dinner`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `who_dn_goods_comment`
--
ALTER TABLE `who_dn_goods_comment`
  MODIFY `who_dn_goods_comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `who_fm_goods_comment`
--
ALTER TABLE `who_fm_goods_comment`
  MODIFY `who_fm_goods_comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `who_res_comment`
--
ALTER TABLE `who_res_comment`
  MODIFY `who_res_comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `address_change`
--
ALTER TABLE `address_change`
  ADD CONSTRAINT `Constr_address_change_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `class_room`
--
ALTER TABLE `class_room`
  ADD CONSTRAINT `class_room_ibfk_1` FOREIGN KEY (`country_sid`) REFERENCES `country` (`country_sid`);

--
-- 資料表的限制式 `course_cart`
--
ALTER TABLE `course_cart`
  ADD CONSTRAINT `Constr_course_cart_class_room_fk` FOREIGN KEY (`class_room`) REFERENCES `class_room` (`room_sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_course_cart_course_fk` FOREIGN KEY (`course`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_course_cart_main_cart_fk` FOREIGN KEY (`main_cart`) REFERENCES `main_cart` (`cart_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `course_comment`
--
ALTER TABLE `course_comment`
  ADD CONSTRAINT `Constr_course_comment_course_fk` FOREIGN KEY (`course`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_course_comment_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `course_order`
--
ALTER TABLE `course_order`
  ADD CONSTRAINT `Constr_course_order_course_fk` FOREIGN KEY (`course`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_course_order_main_order_fk` FOREIGN KEY (`main_order`) REFERENCES `main_order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `customer_coupon`
--
ALTER TABLE `customer_coupon`
  ADD CONSTRAINT `Constr_customer_coupon_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_customer_coupon_pm_event_fk` FOREIGN KEY (`pm_event`) REFERENCES `pm_event` (`pm_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `dinnerproduct`
--
ALTER TABLE `dinnerproduct`
  ADD CONSTRAINT `Constr_dinnerProduct_dinner_list_fk` FOREIGN KEY (`dinner_list`) REFERENCES `dinner_list` (`dinner_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dinnerProduct_product_category_fk` FOREIGN KEY (`product_category`) REFERENCES `product_category` (`category_sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dinnerProduct_product_class_fk` FOREIGN KEY (`product_class`) REFERENCES `product_class` (`class_sid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `dn_goods_cart`
--
ALTER TABLE `dn_goods_cart`
  ADD CONSTRAINT `Constr_dn_goods_cart_dinner_list_fk` FOREIGN KEY (`dinner_list`) REFERENCES `dinner_list` (`dinner_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_cart_farmer_product_fk` FOREIGN KEY (`farmer_product`) REFERENCES `farmer_product` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_cart_main_cart_fk` FOREIGN KEY (`main_cart`) REFERENCES `main_cart` (`cart_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_cart_product_class_fk` FOREIGN KEY (`product_class`) REFERENCES `product_class` (`class_sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_cart_restaurant_fk` FOREIGN KEY (`restaurant`) REFERENCES `restaurant` (`restaurant_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `dn_goods_comment`
--
ALTER TABLE `dn_goods_comment`
  ADD CONSTRAINT `Constr_dn_goods_comment_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_comment_dinner_list_fk` FOREIGN KEY (`dinner_list`) REFERENCES `dinner_list` (`dinner_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `dn_goods_order`
--
ALTER TABLE `dn_goods_order`
  ADD CONSTRAINT `Constr_dn_goods_order_dinner_list_fk` FOREIGN KEY (`dinner_list`) REFERENCES `dinner_list` (`dinner_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_order_farmer_product_fk` FOREIGN KEY (`farmer_product`) REFERENCES `farmer_product` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_order_main_order_fk` FOREIGN KEY (`main_order`) REFERENCES `main_order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_dn_goods_order_product_class_fk` FOREIGN KEY (`product_class`) REFERENCES `product_class` (`class_sid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `fm_goods_cart`
--
ALTER TABLE `fm_goods_cart`
  ADD CONSTRAINT `Constr_fm_goods_cart_farmer_product_fk` FOREIGN KEY (`farmer_product`) REFERENCES `farmer_product` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_fm_goods_cart_main_cart_fk` FOREIGN KEY (`main_cart`) REFERENCES `main_cart` (`cart_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `fm_goods_comment`
--
ALTER TABLE `fm_goods_comment`
  ADD CONSTRAINT `Constr_fm_goods_comment_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_fm_goods_comment_farmer_product_fk` FOREIGN KEY (`farmer_product`) REFERENCES `farmer_product` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `fm_goods_order`
--
ALTER TABLE `fm_goods_order`
  ADD CONSTRAINT `Constr_fm_goods_order_farmer_product_fk` FOREIGN KEY (`farmer_product`) REFERENCES `farmer_product` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_fm_goods_order_main_order_fk` FOREIGN KEY (`main_order`) REFERENCES `main_order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `main_cart`
--
ALTER TABLE `main_cart`
  ADD CONSTRAINT `Constr_main_cart_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `main_order`
--
ALTER TABLE `main_order`
  ADD CONSTRAINT `Constr_main_order_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_main_order_pm_event_fk` FOREIGN KEY (`pm_event`) REFERENCES `pm_event` (`pm_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `peoplehp`
--
ALTER TABLE `peoplehp`
  ADD CONSTRAINT `Constr_peoplehp_sid_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `post_details`
--
ALTER TABLE `post_details`
  ADD CONSTRAINT `Constr_post_details_address_change_fk` FOREIGN KEY (`address_change`) REFERENCES `address_change` (`address_change_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_post_details_main_order_fk` FOREIGN KEY (`main_order`) REFERENCES `main_order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `res_comment`
--
ALTER TABLE `res_comment`
  ADD CONSTRAINT `Constr_res_comment_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_res_comment_dinner_list_fk` FOREIGN KEY (`restaurant`) REFERENCES `restaurant` (`restaurant_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `who_dn_goods_comment`
--
ALTER TABLE `who_dn_goods_comment`
  ADD CONSTRAINT `Constr_who_dn_goods_comment_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_who_dn_goods_comment_dn_goods_comment_fk` FOREIGN KEY (`dn_goods_comment`) REFERENCES `dn_goods_comment` (`dn_goods_comment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `who_fm_goods_comment`
--
ALTER TABLE `who_fm_goods_comment`
  ADD CONSTRAINT `Constr_who_fm_goods_comment_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_who_fm_goods_comment_fm_goods_comment_fk` FOREIGN KEY (`fm_goods_comment`) REFERENCES `fm_goods_comment` (`fm_goods_comment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `who_res_comment`
--
ALTER TABLE `who_res_comment`
  ADD CONSTRAINT `Constr_who_res_comment_id_customer_information_fk` FOREIGN KEY (`customer_information`) REFERENCES `customer_information` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Constr_who_res_comment_id_res_comment_fk` FOREIGN KEY (`res_comment`) REFERENCES `res_comment` (`res_comment_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
