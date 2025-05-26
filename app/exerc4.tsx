import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const produtos = [
  {
    id: '1',
    nome: 'Notebook Dell XPS 13',
    preco: 'R$ 8.999,00',
    imagem: 'https://imgs.search.brave.com/JMJX6JYMp1neysl5zPbdsqUNxeUFpYlkv7myoMD7cJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVjhZUlhQ/NGJ5Q0Eyc3Y2UjZi/NUNEWnFadTgwam9E/Ny1zWEtxMHFYQ1M4/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG1SbC9iR3d1WTI5/dEwybHpMMmx0L1lX/ZGxMMFJsYkd4RGIy/NTAvWlc1MEwyTnZi/blJsYm5Rdi9aR0Z0/TDNOek1pOXdjbTlr/L2RXTjBMV2x0WVdk/bGN5OWsvWld4c0xX/TnNhV1Z1ZEMxdy9j/bTlrZFdOMGN5OXVi/M1JsL1ltOXZhM012/ZUhCekxXNXYvZEdW/aWIyOXJjeTk0Y0hN/dC9NVE10T1RNMU1D/OXRaV1JwL1lTMW5Z/V3hzWlhKNUwzQnMv/WVhScGJuVnRMMjV2/ZEdWaS9iMjlyTFho/d2N5MHhNeTA1L016/VXdMWFF0YjJ4bFpD/MXovYkMxbllXeHNa/WEo1TFRZdS9jSE5r/UDJadGREMXdibWN0/L1lXeHdhR0VtY0hO/allXNDkvWVhWMGJ5/WnpZMnc5TVNaby9a/V2s5TkRBeUpuZHBa/RDAyL056TW1jV3gw/UFRFd01Dd3gvSm5K/bGMwMXZaR1U5YzJo/aC9jbkF5Sm5OcGVt/VTlOamN6L0xEUXdN/aVpqYUhKemN6MW0v/ZFd4cw',
  },
  {
    id: '2',
    nome: 'Smartphone Samsung Galaxy S23',
    preco: 'R$ 4.499,00',
    imagem: 'https://imgs.search.brave.com/pgM3bVkf5CTH4QNH8CvA3-c0g_YyWv6U67_WZm4iKLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vM0NmOS1P/d3A4ZnhhRUZkUmNk/U09XZEpUNnFpdS01/SUkySlo3d1g1cWlv/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlv/ZEhSdy9NaTV0YkhO/MFlYUnBZeTVqL2Iy/MHZSRjlSWDA1UVh6/SlkvWHpZNU1USTBN/aTFOVEVJMy9PVFE0/TWpjd016ZzFOVjh3/L09USXdNalF0Vmkx/ellXMXovZFc1bkxX/ZGhiR0Y0ZVMxei9N/ak10Y0d4MWN5MDFN/VEpuL1lpMW5jbUZt/YVhSbExYVnovWVdS/dkxXTnZiUzF0WVhK/ai9ZWE11ZDJWaWNB',
  },
  {
    id: '3',
    nome: 'Fones de Ouvido Bluetooth Sony',
    preco: 'R$ 599,00',
    imagem: 'https://imgs.search.brave.com/pznBWrkSwC-NR6QI1kEPJ8dvDEZZxZi28w2GeG0ADfg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaEV6Qy1x/VV83NlpxUmNLSUds/YkhKM3l4QVFDdHd3/OXd1bXlIcFBLSUN3/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5wei9kQzVqYjIw/dVluSXZkR2gxL2JX/SnpMelExTHprdk1U/TXYvTVRFMU9EQXlO/VFl5TlM1cS9jR2M',
  },
  {
    id: '4',
    nome: 'Monitor LG UltraWide 29"',
    preco: 'R$ 1.899,00',
    imagem: 'https://imgs.search.brave.com/nOyzSo_8O2hsV2ZgBWvlm4suOYoUXIo-4W5jXnVTnVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUmdXcDRU/M2JsTXhPWkRwQ1h6/VVlFdzFVN1BESUU0/X3RQWkd3SmtTUS1w/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldGbi9aWE11ZEdO/a2JpNWpiMjB1L1lu/SXZhVzFuTDJsdFox/OXcvY205a0x6VTVN/VFl5T0M5dC9iMjVw/ZEc5eVgzVnNkSEpo/L2QybGtaVjlzWjE4/eU9WOXAvY0hOZk1q/RmZPVjltZFd4cy9Y/MmhrWHpJMU5qQjRN/VEE0L01GOW9aSEl4/TUY5bWNtVmwvYzNs/dVkxOW9aRzFwWDJS/dy9YM1psYzJGZk1q/bDNhell3L01GOTNY/ek13T1RrMVh6TmYv/WlRsaFpUSm1aV001/T0RFeS9Zak5qTURn/eU1XSXpaRFJsL1l6/UTFaamcwTUdRdWFu/Qm4',
  },
  {
    id: '5',
    nome: 'Teclado Mecânico HyperX',
    preco: 'R$ 399,00',
    imagem: 'https://imgs.search.brave.com/c_4f2oLFfetOcYHdKUu4lIQESmiOgaWhfur0JdqL0VM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbHhxVFJI/azZBdVlZRThLaGRp/NlNHSWNTVldEZmhr/cXBNeFVpX09WcTQ5/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldGbi9aWE0yTG10/aFluVnRMbU52L2JT/NWljaTl3Y205a2RY/UnYvY3k5bWIzUnZj/eTh6TnpFMS9PRFl2/ZEdWamJHRmtieTF0/L1pXTmhibWxqYnkx/bllXMWwvY2kxb2VY/Qmxjbmd0WVd4cy9i/M2t0Yld0M01UQXdM/WEpuL1lpMXpkMmww/WTJndGNtVmsvTFda/MWJHd3RjMmw2WlMx/MS9jeTF3Y21WMGJ5/MDBjRFZsL01XRmhM/V0ZpWVY4eE56SXkv/T0RneU16Z3hYMmN1/YW5Cbg',
  },
  {
    id: '6',
    nome: 'Mouse Gamer Logitech G502',
    preco: 'R$ 299,00',
    imagem: 'https://imgs.search.brave.com/O1DOP6z4y8zmhmKkjFMnj1JRylB-iKWYpxXU4OeSyhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaTlzemxM/UEF6enNOYlNYamQz/RWFlSmItcEc4eDVC/R2RCQWtCRjduNEgx/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9jM2x0WVM1/amIyMHVZbkl2L2JX/VmthV0V2ZEcxd0wz/ZGwvWW5BdlkyRjBZ/V3h2Wnk5dy9jbTlr/ZFdOMEwyTmhZMmhs/L0x6RXZhVzFoWjJV/dk5UYzQvZUM4NVpH/WTNPR1ZoWWpNei9O/VEkxWkRBNFpEWmxO/V1ppL09HUXlOekV6/Tm1VNU5TOHovTHpN/dk16TXpOamRmTnk1/My9aV0p3',
  },
  {
    id: '7',
    nome: 'Cadeira Gamer ThunderX3',
    preco: 'R$ 1.299,00',
    imagem: 'https://imgs.search.brave.com/_Xa13tkp1sHCLRdJ0oc2cpMu7DmgzQJ4-ermlh0WuR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vei1DUUxK/V2h0N3p0T0VwSWJv/cVBlN2ZIQS1uQ3V0/cFdoWjlqV3MzcjdO/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV011YUdG/NVlYQmxheTVqL2Iy/MHVZbkl2Y0hKdlpI/VjAvYjNNdk5qRTVN/REV2TlRVdy9Mell1/ZDJWaWNB',
  },
  {
    id: '8',
    nome: 'Smartwatch Apple Watch Series 9',
    preco: 'R$ 3.999,00',
    imagem: 'https://imgs.search.brave.com/5l--z3TmBwCa9OAhRQFjlG1lK6xa0UT2pfpoF36Wt1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vY3gtcjZt/WjAyVXYtMFV5SzNy/ZWhlU0VJSVUwLUgx/NzdRWUFMd0J5SjNJ/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/WkhOaC9jM05sZEhN/dVlYQndiR1V1L1ky/OXRMMnhwZG1Vdk4x/ZFYvUVZNek5UQXZh/VzFoWjJWei9MM1Js/WTJndGMzQmxZM012/L1lYQndiR1V0ZDJG/MFkyZ3QvYzJWeWFX/VnpMVGt1Y0c1bg',
  },
];

export default function exerc4() {
  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f2f2f2',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  imagem: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 6,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
