import { AccordionItem } from "../AccordionItem/AccordionItem";
import '../AccordionItem/AccordionItem.css'
const Accordion = () => {
    const items = [
      {
        title: 'ما هو برنامج إدارة حسابات التواصل الاجتماعي؟',
        description: 'This is the description for Accordion Item 1. This is the description for Accordion Item 1.',
      },
      {
        title: 'ما هو دور التسويق بالمحتوى بالنسبة لجذب عميل؟',
        description: 'التسويق بالمحتوى أمر يتبعه الكثيرين وأغلب من يتقنه يكونون أصحاب الأنشطة التجارية حيث يرغبون في أن يكون محتواهم تسويقيًا يجذب العملاء بصورة كبيرة، ولذا كان له دور كبير في عملية جذب العميل، حيث نرى أكبر شركات التجارة تهتم بالانفراد بأفضل محتوى ممكن لكي تتمكن من جذب العملاء وربط أذهانهم بالعلامة التجارية الخاصة بهم',
      },
      {
        title: 'ما هي أهمية التسويق عبر شبكات التواصل الاجتماعي؟',
        description: 'This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.',
      },
      {
        title: 'ما هي مراحل العمل على إدارة منصات السوشيال ميديا ؟',
        description: 'This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.',
      },
      {
        title: 'ما الذي نقدمه لك في خدمات إدارة حسابات مواقع التواصل الاجتماعي؟',
        description: 'This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.',
      },
      {
        title: 'ما هي أهمية التسويق عبر شبكات التواصل الاجتماعي؟',
        description: 'This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.',
      },
      {
        title: 'ما هو دور التسويق بالمحتوى بالنسبة لجذب عميل؟',
        description: 'This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3. This is the description for Accordion Item 3.',
      },
    ];
  
    return (
      <div className="container accordion">

        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    );
  };
  
  export default Accordion;