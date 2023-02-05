import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme, theme } from 'src/libs/theme';
import { useMe } from '../../libs/api/src';
import { CenteredLoader, Icon, Icons } from '../../libs/core';
import { Button } from 'src/libs/core/Buttons';
import { Modal } from '../../libs/core/Modal';
import { Form, Formik } from 'formik';
import Input from '../../libs/core/Input/Input';
import * as Yup from 'yup';
import { useCreateChapter } from '../../libs/api/src/chapter';


const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  globalContainer: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: theme.marginBase * 6,
    flexDirection: 'column',
    padding: theme.marginBase,
    paddingBottom: theme.marginBase * 6,
  },
  titleContainer: {
    ...theme.basicFlex,
    gap: theme.marginBase * 3,
  },
  title: {
    ...theme.fonts.h2,
    color: theme.colors.orange,
  },
  modalContainer: {
    ...theme.basicFlex,
    gap: theme.marginBase * 3,
  },
}));

interface Values {
  title: string,
  description: string,
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required').min(3, 'Too short'),
  description: Yup.string().required('Required').min(3, 'Too short'),
});


export const Home = () => {
  const classes = useStyles({ theme });
  const { data: me, isLoading } = useMe();
  const { mutateAsync: createChapter } = useCreateChapter();
  const [isOpened, setIsOpened] = React.useState(false);
  const submit = async (values: Values) => {
    try {
      console.log(values);
      await createChapter(values);
      setIsOpened(false);
    } catch (e) {
      throw e;
    }
  };
  if (isLoading) {
    return <CenteredLoader />;
  }

  return (
    <div className={classes.globalContainer}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Chapters</h1>
        <Button square onClick={() => {
          setIsOpened(true);
        }
        }>
          <Icons icon={Icon.addFolder} size={theme.icon.normal + 8} />
        </Button>
      </div>
      <Modal isOpen={isOpened} setIsOpen={setIsOpened} title='Update Chapter'>
        <Formik initialValues={{ title: '', description: '' }} onSubmit={submit}
                validationSchema={validationSchema}>
          <Form>
            <div className={classes.modalContainer}>
              <Input title='title' name='title' />
              <Input title='description' name='description' />
              <Button text='submit' type='submit' full />
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>

  );
};
