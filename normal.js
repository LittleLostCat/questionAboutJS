var a = [1,2,3,4].reduce((p,c)=> {p.push(c);return p},[]);
//���� var a = [1,2,3,4].reduce((p,c)=> p.push(c),[]);
//ʹ��reduce��������return p.push(c),���صĲ��Ǳ��ֵ�������p����c,�����ᵼ�´���
console.log(a);