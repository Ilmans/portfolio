<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $projects = [
            [
                'name' => 'Marketplace Digital Multi Seller',
                'stacks' => json_encode([
                    'Laravel ',
                    'React Js',
                    'Vite',
                    'Tailwind Css',
                ]),
                'image' => 'portfolios/marketplace.png',
                'description' => '<p>Stack / library : Laravel 9,React js with Inertia, Mysql, Pusher Laravel, Amazon s3 &amp; SQS , ImageKit <br>
preview : https://m-pedia.co.id</p>


<p>- Single Page Application with skeleton loading<br>
- Using design pattern repository</p>

<p>User Feature :<br>
- Authentacion<br>
- Transaction ( Checkout, payment )<br>
- Live Chat<br>
- Cart<br>
- Comment,review product<br>
- Live searching product<br>
- Product Filter<br>
- Notifications with Crud<br>
- etc</p>

<p>User Dashboard<br>
- Profile configuration ( Bank information,change password,change picture etc )<br>
- Dashboard sales statement monthly<br>
- Upload, edit and manage products.<br>
- Payout <br>
- Manage transaction &amp; invoice</p>

<p>and others.</p>',
                'year' => '2022',
            ],
             [

                'name' => 'Bot Chat Wa Integrate BOT AI ( Webhook )',
                'stacks' => json_encode([ 'Node js']),
                'image' => 'portfolios/botai.png',
                'year' => '2022',
                'description' => '<p><strong>Stack : Node js ( Only Rest API )</strong></p>
<p><strong>Integrate with&nbsp;</strong><a href="https://openai.com"><strong>https://openai.com</strong></a></p>
<p><strong>Code : <a href="https://github.com/Ilmans/bot-ai">https://github.com/Ilmans/bot-ai</a></strong></p>
<p><br></p>
<p><strong>Feature</strong></p>
<p>- AI chat</p>
<p>- Convert Image to sticker via whatsapp CHAT</p>
<p><br></p>'

              ],
            [
                'name' => 'SPA PPOB & SMM | Integrate API & Payment Gateway',
                'stacks' => json_encode([
                    'Laravel ',
                    'React Js',
                    'Tailwind Css',
                    'Webpack'
                ]),
                'image' => 'portfolios/ppobspa.png',
                'description' => "<p><strong>Stack : Laravel &nbsp;8, react js ( inertia ) dan tailwind css ( SPA )</strong></p>
<p><br></p>
<p>User :</p>
<ul>
    <li>Transaksi PPOB &amp; pascabayar, beserta history nya, ( Otomatis update status, refund ) - h2h digiflaz</li>
    <li>Transaksi SMM beserta history ( otomatis update status , refund )&nbsp;</li>
    <li>Redem Code voucher</li>
    <li>Deposit ,third party payment gateway TRIPAY&nbsp;</li>
    <li>Tiket</li>
    <li>Integrate whatsapp gateway ( BOT transaction and Notification API )</li>
    <li>Mutasi,report saldo, informations, setting dll</li>
</ul>
<p><br></p>
<p>Admin :</p>
<p>&nbsp;- Kelola user,transaksi,deposit,deposit method,tiket, informasi ,report dll</p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>",
                'year' => '2022',
            ],
            [

                'name' => 'Whatsapp Gateway Multi Device',
                'stacks' => json_encode(['Laravel ', 'Node Js']),
                'image' => 'portfolios/wamd.png',
                'description' => '<p><strong>Stack : Node js, Laravel, Socket IO</strong></p>
    <p><br></p>
    <p><strong>Feature :</strong></p>
    <ul>
        <li>Send Message,image,document,audio</li>
        <li>Rest API&nbsp;</li>
        <li>Grab Group and member whatsapp</li>
        <li>Blast / Campaign message</li>
        <li>Auto connection 24 hours using cronjob</li>
        <li>Auto reply &amp; webhook</li>
        <li>Mange user</li>
        <li>authentaction &amp; setting whatsapp connection</li>
        <li>etc</li>
    </ul>',
    'year' => '2021'
            ],
            [
              'name' => 'License Management ( Rest API )',
                'stacks' => json_encode(['Laravel ', 'Backend']),
                'image' => 'portfolios/license-management.png',
                'year' => '2021',
                'description' => 'no description'
        ],
             [

                'name' => 'Absensi siswa via QR code',
                'stacks' => json_encode(['Codeigniter ', 'Bootstrap','Jquery']),
                'image' => 'portfolios/absensi.png',
                'year' => '2021',
                'description' => '<p><strong>Fitur Siswa :</strong></p>
<ul>
    <li>- Kaitkan Nis Dengan Akun ,</li>
    <li>- Download Kartu absen ( Qr code ) Untuk Absen Menggunakan Kamera</li>
    <li>- Izin tidak masuk sekolah</li>
    <li>- Absen masuk dan keluar Siswa</li>
    <li>- Lihat Data Libur dan data izin .</li>
    <li>- Lihat data absen perbulan</li>
</ul>
<p><br></p>
<p><strong>Fitur Admin</strong></p>
<ul>
    <li>-Menu Manajement</li>
    <li>- Kelola Absensi</li>
    <li>- Menu Access user ( Mengatur Apa menu apa yang di izinkan di akun dengan level tertentu Baik wali Kelas,Guru dll,</li>
    <li>- Absen manual, dan rekap absen perbulan</li>
    <li>- Atur Jam absen masuk,keluar ( Camera absen akan off dan on sesuai jam )Yang di atur Oleh operator Sekolah</li>
    <li>- Atur Libur weekend dan nasional</li>
    <li>- Kelola kelas dan jurusan</li>
    <li>-Bisa Melihat Siswa Sesuai dengan kelas dan jurusan</li>
    <li>- Crud Data siswa, data izin ( konfirmasi / tolak )</li>
    <li>- Kelola User staff dan user siswa</li>
</ul>
<p>other</p>
<p>- Authentication,verificatoin email etc</p>'
             ],
              [

                'name' => 'Web Streaming FILM ( Course Project )',
                'stacks' => json_encode(['Laravel ', 'Webpack','React Js']),
                'image' => 'portfolios/moonton.png',
                'year' => '2021',
                'description' => '<p><strong>Stack : Laravel,tailwind,react js,</strong></p>
<p><strong>I finished this project from online course, i do a little modification.</strong></p>
<p><br></p>
<p>Feature :</p>
<p>- Streaming, fetch video from youtuber url</p>
<p>- Midtrans payment gateway</p>
<p>- Authenttcation</p>
<p>- etc</p>'

              ],
              [

                'name' => 'PPOB & SMM NATIVE',
                'stacks' => json_encode(['PHP Native Mvc ', 'Bootstrap','Jquery']),
                'image' => 'portfolios/phpmvc.png',
                'year' => '2020',
                'description' => '<p>No description</p>'

              ],
              [

                'name' => 'PROFILE PONDOK PESANTREN',
                'stacks' => json_encode(['LARAVEL ', 'Bootstrap','Javascript']),
                'image' => 'portfolios/darul-hidayah.png',
                'year' => '2020',
                'description' => '<p><p><strong>Stack : Laravel, jquery</strong></p>
<p><br></p>
<p><strong>Feature</strong></p>
<p><strong>- Home page profile</strong></p>
<p><strong>- management santri</strong></p>
<p><strong>- management document pesantern</strong></p></p>'

              ],
              [

                'name' => 'Landing Page WAMP',
                'stacks' => json_encode([ 'Bootstrap','Jquery']),
                'image' => 'portfolios/landingpagewa.png',
                'year' => '2020',
                'description' => '<p>No description</p>'

              ],
              [

                'name' => 'Wa gateway Single device v1 ( native )',
                'stacks' => json_encode([ 'Node js','PHP native','Bootstrap']),
                'image' => 'portfolios/wamp.png',
                'year' => '2020',
                'description' => '<p>No description</p>'

              ],
        ];

        Project::insert($projects);
    }
}
