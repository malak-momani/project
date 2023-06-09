import { EventTypes, courseStatus } from "../../Constants/constants";
import gameDesign from '../../assets/games.jpeg';
import csharp from '../../assets/c.png';
import twodGames from '../../assets/twodGames.png';
import threedGames from '../../assets/threedgames.png';

export const mockEvents = [
    {
        type: EventTypes.test,
        title: 'جملة Select',
        category: 'قواعد البيانات',
        key: 1,
    },
    {
        type: EventTypes.mission,
        title: 'تصميم واجهة متجر الكتروني',
        category: 'صور الواجهة الأمامية',
        key: 2,
    },
    {
        type: EventTypes.test,
        title: 'جملة if الشرطيه',
        category: 'البرمجة الكينونية',
        key: 3,
    },
];

export const mockCourses = [
    {
        number: 1,
        name: 'تصميم الالعاب الالكترونية',
        image: gameDesign,
        status: courseStatus.completed,
    },
    {
        number: 2,
        name: 'البرمجة بلغة السي شارب',
        image: csharp,
        status: courseStatus.uncompleted
    },
    {
        number: 3,
        name: 'تطوير العاب ثنائية البعد على محرك الألعاب',
        image: twodGames,
        status: courseStatus.uncompleted,
        isClosed: true,
    },
    {
        number: 4,
        name: 'تطوير العاب ثلاثية البعد على محرك الألعاب' ,
        image: threedGames,
        status: courseStatus.uncompleted,
        isClosed: true,
    }

]