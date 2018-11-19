import Vue from 'vue';
import
{
  Button,
  Submenu,
  MenuItem,
  Menu,
  Icon,
  Select,
  Option,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Row,
  Col,
  Input,
}
  from 'iview';
import 'iview/dist/styles/iview.css';

const COMPONENT_OBJ = {
  Button,
  Submenu,
  MenuItem,
  Menu,
  Icon,
  Select,
  Option,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Row,
  Input,
  Col,
};

Object.keys(COMPONENT_OBJ).forEach(key => (Vue.component(key, COMPONENT_OBJ[key])));
